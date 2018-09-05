# Comment installer Node.JS !?

Pour les personnes qui se trouvent sur Ubuntu :
- Ouvrir le terminal.
- Copier coller la commande :

  - sudo apt-get update
  - sudo apt-get install nodejs

OU

  - curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  - sudo apt-get install -y nodejs

Ces commandes installent toutes les deux la version 6 de NodeJS, la version qui est actuellement la plus stable. Mais vous pouvez choisir de prendre la version 8, vous avez le choix.

Pour la version 8 :

VIA CURL

  - curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  - sudo apt-get install -y nodejs

VIA NPM (si vous avez déja la version 6 ou une version antérieure)  

  - sudo npm cache clean -f
  - sudo npm install -g n
  - sudo n stable

Enfin si vous voulez uniquement choisir la version que vous voulez utiliser :

  - sudo n 'le nom de la version'

Relancer votre terminal et vérifier votre version.
Pour vérifier votre version utilisé 'node -v' dans le terminal.

Pour les personnes qui se trouvent sur Mac et sur Windows rendez vous sur le site de Node.JS.

En cas de problème Marvin sera la !

Ensuite pour simplement utiliser Node.JS :

Il suffit d'écrire node dans le terminal et vous verrez le signe '>' en début de ligne.
Voila Node est lancé.
