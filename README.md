# Site LAN Adept

##### Table des matières

- [Dépendances](#Dependances)
- [Installer PHP](#Installation-de-PHP)
- [Mise en place de la BD](#Mise-en-place-de-la-BD)
- [Ajouter le driver MongoDB](#Ajouter-le-driver-MongoDB)

#### Dependances

- Apache2
- PHP 7.2+
- MongoDB 3.6.8+

#### Installation de PHP

1. Ajouter un third party repo pour installer PHP

```
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
```
- Executer `sudo apt update`

2. Installer PHP7.2
`sudo apt install php7.2 libapache2-mod-php7.2 php7.2-common php7.2-cli php7.2-mongodb php-pear php7.2-dev`

#### Mise en place de la BD

1. Installation de [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

2. Créer un utilisateur qui peut créer et mettre à jour la BD

- Ouvrir `Mongo`
- Utiliser `use admin`
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

3. Modifier le fichier dbconn.php

```php
$user = "lanadept";
$host = "localhost";
$pwd = "123";
```

#### Ajouter le driver MongoDB 
[Docs](https://docs.mongodb.com/ecosystem/drivers/php/)

1. Installer [PECL](https://www.php.net/manual/fr/install.pecl.php)

- Executer `sudo apt install php-pear php7.2-dev -y`

2. Installer le driver avec [PECL](https://www.php.net/manual/en/mongodb.installation.pecl.php)

- Executer `sudo pecl install mongodb` (La commande peut prendre un certain temps à s'executer)

3. Ajouter la réference

-  Executer `sudo echo "extension=mongodb.so" >> /etc/php/7.2/apache2/php.ini`
