module.exports = function (sequelize, DataTypes) {
    var Chore = sequelize.define("Chore", {
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Chore.associate = function (models) {
        Transaction.belongsTo(models.Chore, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Chore;
};