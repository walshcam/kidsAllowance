module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        deposit: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Transaction.associate = function (models) {
        Transaction.belongsTo(models.Kid, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Transaction;
};
