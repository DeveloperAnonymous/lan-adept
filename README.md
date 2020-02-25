# Site LAN Adept

##### Table des matières

- [Dépendances](#Dépendances)

#### Dépendances

- Apache
- PHP 7.4+
- MongoDB 4.2.3+

#### Mise en place de la BD

1. Créer un utilisateur qui peut créer et mettre à jour la BD

- Ouvrir `Mongo`
- Executer `use admin`
- Créer l'utilisateur

```
db.createUser({
	user: "lanadept",
	pwd: "123",
	roles: [{
		role:  "root",
		db: "admin"
	}]
})
```

2. Modifier le fichier dbconn.php

```php
$user = "lanadept";
$host = "localhost";
$pwd = "123";
```

#### Ajouter le Driver MongoDB ([Docs](https://docs.mongodb.com/ecosystem/drivers/php/))

1. Installer [PECL](https://www.php.net/manual/fr/install.pecl.php)
2. Installer le driver avec [PECL](https://www.php.net/manual/en/mongodb.installation.pecl.php)

- Executer `sudo pecl install mongodb`
- Ajouter la réference à php.ini `extension=mongodb.so`