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
        // Utilize This If transaction.js Is Not Used
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

    // Kid.associate = function (models) {
    //     Kid.hasMany(models.Transaction, {
    //         onDelete: "cascade"
    //     });
    // };

    return Kid;
};
