module.exports = (sequelize,dataType) => {
    const User = sequelize.define("users",{
        id:{
            type : dataType.INTERGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type : dataType.STRING,
            allowNull:false
        }
    });
    return User;
};