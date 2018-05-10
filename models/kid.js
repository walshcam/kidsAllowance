module.exports = function (sequelize, DataTypes) {
    var Kid = sequelize.define("Kid", {
        kidname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        kidpassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wish: {
            type: DataTypes.TEXT,
        }
    });

    Kid.associate = function (models) {
        Kid.belongsTo(models.Parent, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Kid;
};
