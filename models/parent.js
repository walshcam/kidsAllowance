module.exports = function (sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
        parentname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parentpassword: {

            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Parent.associate = function (models) {
        Parent.hasMany(models.Kid, {
            onDelete: "cascade"
        });
    };

    return Parent;
};
