
const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});


function createUser(userName, userLastName)
{ 
  /* Create a user */
  sequelize
    .authenticate()
    .then(() => 
    {
      console.log('Connection has been established successfully.');
    })
    .catch(err => 
    {
      console.error('Unable to connect to the database:', err);
    });

  class Cars extends Sequelize.Model {}
  Cars.init(
  {
    firstName: Sequelize.STRING,
    lastName:Sequelize.STRING
  }, { sequelize, modelName: 'users' });

  /* crea usuario*/
  sequelize.sync()
    .then(() => Cars.create(
    {
      firstName: userName,
      lastName: userLastName
    }))
    .then(jane => 
    {
      console.log(jane.toJSON());
    });
}

function updateUser()
{
  const Model = Sequelize.Model;
  class User extends Model {}
  User.init(
  {
    firstName: 
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: 
    {
      type: Sequelize.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'user'
  });
  //actualiza registro
  User.update({ firstName: "XXXXXXX" }, {
    where: {
      lastName: 'Marcelli'
    }
  }).then(() => {
    console.log("Done");
  });
}

function getUsers()
{  
  const Model = Sequelize.Model;
  class User extends Model {}
  User.init(
  {
    firstName: 
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: 
    {
      type: Sequelize.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'user'
  });


  // obtiene registros
  User.findAll().then(users => 
  {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
}

function deleteUser(idUser)
{
  const Model = Sequelize.Model;
  class User extends Model {}
  User.init(
  {
    firstName: 
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: 
    {
      type: Sequelize.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'user'
  });

  //elimina usuario con id 
  User.destroy(
  {
    where: {
      id: idUser
    }
  }).then(() => 
  {
    console.log("Elimine Registro");
  });
}

//createUser("Juan", "Roman")
//deleteUser(2)
getUsers()