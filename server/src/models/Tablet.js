module.exports = (sequelize, DataTypes) => {
    const Tablet = sequelize.define('Tablet', {
        nametablet : DataTypes.STRING,
        price: DataTypes.STRING,
        OS: DataTypes.STRING,
        Screensize: DataTypes.STRING,
        Resolution: DataTypes.STRING,
        CPU: DataTypes.STRING,
        Storage: DataTypes.STRING,
        Weight: DataTypes.STRING,
        Dimension:DataTypes.STRING,
        Rearcamera:DataTypes.STRING,
        Frontcamera:DataTypes.STRING
    })
    return Tablet;
   }