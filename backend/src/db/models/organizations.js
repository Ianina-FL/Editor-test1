const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const organizations = sequelize.define(
    'organizations',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  organizations.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.organizations.hasMany(db.users, {
      as: 'users_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.organizations.hasMany(db.activities, {
      as: 'activities_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.organizations.hasMany(db.contacts, {
      as: 'contacts_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.organizations.hasMany(db.leads, {
      as: 'leads_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.organizations.hasMany(db.metrics, {
      as: 'metrics_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    db.organizations.hasMany(db.notes, {
      as: 'notes_organizations',
      foreignKey: {
        name: 'organizationsId',
      },
      constraints: false,
    });

    //end loop

    db.organizations.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.organizations.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return organizations;
};
