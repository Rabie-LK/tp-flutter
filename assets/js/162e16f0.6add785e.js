"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[354],{1497:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ddd-e150ea1f51b56e4ed4736b60ce20c19e.png"},4927:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ee-19ec5ad0e42efb5d5f6e1eed2ee2a710.png"},5444:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ccc-fe62e6646ce6a3db5de18a61e1408060.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},9745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Travaux pratiques Flutter 2025/flutter-tp2","title":"TP2","description":"Deuxi\xe8me s\xe9ance de travaux pratiques avec Flutter","source":"@site/docs/Travaux pratiques Flutter 2025/Tp2.md","sourceDirName":"Travaux pratiques Flutter 2025","slug":"/flutter-tp2","permalink":"/tp-flutter/docs/flutter-tp2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Travaux pratiques Flutter 2025/Tp2.md","tags":[],"version":"current","frontMatter":{"title":"TP2","description":"Deuxi\xe8me s\xe9ance de travaux pratiques avec Flutter","id":"flutter-tp2","slug":"/flutter-tp2"},"sidebar":"tutorialSidebar","previous":{"title":"TP1","permalink":"/tp-flutter/docs/flutter-tp1"},"next":{"title":"intro","permalink":"/tp-flutter/docs/intro"}}');var a=t(4848),i=t(8453);const r={title:"TP2",description:"Deuxi\xe8me s\xe9ance de travaux pratiques avec Flutter",id:"flutter-tp2",slug:"/flutter-tp2"},l="Flutter - TP2",o={},d=[{value:"<strong>Cr\xe9ation de l\u2019interface de base de l\u2019application</strong>",id:"cr\xe9ation-de-linterface-de-base-de-lapplication",level:2},{value:"Configuration de la base de donn\xe9es :",id:"configuration-de-la-base-de-donn\xe9es-",level:2},{value:"Cr\xe9ation de la base de donn\xe9es :",id:"cr\xe9ation-de-la-base-de-donn\xe9es-",level:2},{value:"Lecture des donn\xe9es depuis la base de donn\xe9es :",id:"lecture-des-donn\xe9es-depuis-la-base-de-donn\xe9es-",level:2},{value:"Affichage des \xe9l\xe9ments :",id:"affichage-des-\xe9l\xe9ments-",level:2},{value:"Ajout des \xe9l\xe9ments :",id:"ajout-des-\xe9l\xe9ments-",level:2},{value:"Mise \xe0 jour des \xe9l\xe9ments :",id:"mise-\xe0-jour-des-\xe9l\xe9ments-",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"flutter---tp2",children:"Flutter - TP2"})}),"\n",(0,a.jsxs)(n.p,{children:["Flutter met \xe0 disposition une d\xe9pendance qui permet de manipuler les bases de donn\xe9es de type\nSQLite : ",(0,a.jsx)(n.strong,{children:"SqfLite"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"L\u2019objectif de cette s\xe9ance de travaux pratiques est :"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"D\xe9couvrir et manipuler les bases de donn\xe9es SQLite avec Flutter"}),"\n",(0,a.jsx)(n.li,{children:"Structurer un projet flutter en faisant s\xe9paration entre la partie UI et la partie logique."}),"\n",(0,a.jsx)(n.li,{children:"Utilisation de FloatingActionButton et ListView."}),"\n",(0,a.jsx)(n.li,{children:"Apprendre \xe0 int\xe9grer le null safety de dart."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cr\xe9ation-de-linterface-de-base-de-lapplication",children:(0,a.jsx)(n.strong,{children:"Cr\xe9ation de l\u2019interface de base de l\u2019application"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Cr\xe9ez un nouveau projet Flutter avec nom de projet ",(0,a.jsx)(n.strong,{children:"todo"}),". Puis mettez le code suivant dans le\nfichier ",(0,a.jsx)(n.strong,{children:"lib/main.dart"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart'; \nvoid main() { \nrunApp(const MyApp()); \n} \nclass MyApp extends StatelessWidget { \nconst MyApp({Key? key}) : super(key: key); \n@override \nWidget build(BuildContext context) { \nreturn MaterialApp( \ntitle: 'My ToDo App', \ntheme: ThemeData( \nprimarySwatch: Colors.amber, \n), \nhome: const MyHomePage(title: 'My Todo App'), \ndebugShowCheckedModeBanner: false, \n); \n} \n} \n"})}),"\n",(0,a.jsxs)(n.p,{children:["2.Cr\xe9er un nouveau dossier sous le nom de screens, puis ajouter un fichier dart sous le nom de\n",(0,a.jsx)(n.strong,{children:"lib/dart/screens/home_page.dart"}),". mettez le code suivant :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart'; \n \nclass MyHomePage extends StatefulWidget { \n  const MyHomePage({Key? key, required this.title}) : super(key: key); \n \n  final String title; \n \n  @override \n  State<MyHomePage> createState() => _MyHomePageState(); \n} \n \nclass _MyHomePageState extends State<MyHomePage> { \n  @override \n  Widget build(BuildContext context) { \n    return Scaffold( \n      appBar: AppBar( \n        title: Text(widget.title), \n      ), \n      // Corps vide pour commencer \n      body: Center( \n        child: Text('Bienvenue dans votre application ToDo!'), \n      ), \n    \n    ); \n  } \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Rajouter ensuite la liaison entre ",(0,a.jsx)(n.strong,{children:"lib/main.dart"})," et ",(0,a.jsx)(n.strong,{children:"lib/screens/home_page.dart"})," avec l\u2019import\nsuivant dans le fichier ",(0,a.jsx)(n.strong,{children:"main.dart"})," :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:todo/screens/home_page.dart';\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Compiler et lancer l\u2019application sur l\u2019\xe9mulateur, ceci est le r\xe9sultat esp\xe9r\xe9 :"}),"\n"]}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",margin:"20px 0",width:"300px"},children:(0,a.jsx)("img",{src:t(5444).A,alt:"DevNotes App - Liste des notes",style:{display:"block",marginLeft:"500px",maxWidth:"100%",height:"auto"}})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["Pour ajouter des \xe9l\xe9ments \xe0 la liste ",(0,a.jsx)(n.strong,{children:"todo"})," qui seront stock\xe9s dans la base de donn\xe9es, nous\najoutons un bouton ",(0,a.jsx)(n.strong,{children:"FloatingActionButton"})," \xe0 la ",(0,a.jsx)(n.strong,{children:"Scaffold"})," sous l\u2019attribut ",(0,a.jsx)(n.strong,{children:"body"}),". Pour cela, ajoutez le\ncode suivant qui contient une icon \xab add \xbb et une fonction vide dans ",(0,a.jsx)(n.strong,{children:"onPressed"})," qu\u2019on rajoutera\nplus tard pour l\u2019ajout des \xe9l\xe9ments :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"floatingActionButton: FloatingActionButton( \nonPressed: () { \n// Action pour ajouter une nouvelle t\xe2che sera impl\xe9ment\xe9e ici \n}, \ntooltip: 'Ajouter une t\xe2che', \nchild: const Icon(Icons.add, color: Colors.white), \nbackgroundColor: Colors.teal, \n), \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["Nous ajoutons ensuite \xe0 l\u2019attribue ",(0,a.jsx)(n.strong,{children:"onPressed"})," la fonction ",(0,a.jsx)(n.strong,{children:"ajouter()"})," qui nous permettra d\u2019ajouter\ndes \xe9l\xe9ments \xe0 liste todo. Pour cela Ajoutez la fonction suivante dans la classe\n",(0,a.jsx)(n.strong,{children:"_MyHomePageState"})," dans le fichier ",(0,a.jsx)(n.strong,{children:"home_page.dart"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future<void> ajouter() async { \nawait showDialog<void>( \ncontext: context, \nbarrierDismissible: false, // si on appuie \xe0 l\u2019ext\xe9rieur \n//\xe7a ne va pas disparaitre \nbuilder: (BuildContext dialogContext) { \nreturn AlertDialog( \ntitle: const Text('Ajouter une liste de t\xe2ches'), \ncontent: const Text('DialogBody'), \nactions: <Widget>[ \nTextButton( \nchild: const Text('buttonText'), \nonPressed: () { \nNavigator.of(dialogContext).pop(); \n}, \n), \n], \n); \n}, \n); \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"Nous faisons appel \xe0 cette fonction dans FloatingActionButton comme suit :"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"onPressed: () => ajouter(), \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsxs)(n.li,{children:["La fonction ",(0,a.jsx)(n.strong,{children:"ajouter()"})," est de type asynchrone, c\u2019est pour cela qu\u2019elle est de type ",(0,a.jsx)(n.strong,{children:"Future"}),". Il faudra\naussi importer : ",(0,a.jsxs)(n.em,{children:["import 'dart",":async",";"]})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuration-de-la-base-de-donn\xe9es-",children:"Configuration de la base de donn\xe9es :"}),"\n",(0,a.jsxs)(n.p,{children:["Nous allons maintenant traiter la partie logique de l\u2019application, pour cela nous commen\xe7ons avec la\nconfiguration de la base de donn\xe9es. Nous utiliserons dans ce ",(0,a.jsx)(n.strong,{children:"TP SQFITE"})," (plugin Flutter de ",(0,a.jsx)(n.strong,{children:"SQLite"})," :\n",(0,a.jsx)(n.a,{href:"https://pub.dev/packages/sqflite",children:"https://pub.dev/packages/sqflite"}),")"]}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pour installer SQflite ajoutez la d\xe9pendance :   sqflite : ^2.0.2+1 au fichier pubspec.yaml\nOu alors ouvrez le terminal de votre editeur et entrez la commande : flutter pub add\nsqflite.\nVous allez alors avoir le r\xe9sultat suivant dans le fichier pubspec.yaml"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Dans le m\xeame fichier, ajoutez \xe9galement la d\xe9pendance vers le path provider : ^2.0.10 (ou lancer\nflutter pub add path_provider), qui permet d\u2019obtenir les chemins d\u2019acc\xe8s vers les fichiers au sein\nde l\u2019application (notamment les dossiers de l\u2019application). Si l\u2019ajout s\u2019est fait correctement vous\naurez le r\xe9sultat suivant :"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"dependencies: \nflutter: \nsdk: flutter \nsqflite: ^2.0.2+1 \npath_provider: ^2.0.10  \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsxs)(n.li,{children:["Appliquer le changement en appuyant sur ",(0,a.jsx)(n.strong,{children:"Pub get"})," sur Android Studio (ou lancer la commande ",(0,a.jsx)(n.strong,{children:"flutter pub get"})," ou ",(0,a.jsx)(n.strong,{children:"dart pub get"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cr\xe9ation-de-la-base-de-donn\xe9es-",children:"Cr\xe9ation de la base de donn\xe9es :"}),"\n",(0,a.jsx)(n.p,{children:"Nous allons cr\xe9er la classe qui g\xe8re la liste de taches associ\xe9es \xe0 la base de donn\xe9es."}),"\n",(0,a.jsxs)(n.ol,{start:"12",children:["\n",(0,a.jsxs)(n.li,{children:["Allez dans le dossier lib, cr\xe9ez un nouveau dossier en lui donnant le nom models, et dans ce nouveau package cr\xe9er un fichier ",(0,a.jsx)(n.strong,{children:"models/item.dart"})," puis \xe9crivez la classe Item suivante :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"class Item { \n  int? id; \n  String? nom; \n \n  Item(Map<String, dynamic> map) { \n    id = map['id']; \n    nom = map['nom'] ?? \"\"; \n  } \n \n  Map<String, dynamic> toMap() { \n    return { \n      'id': id, \n      'nom': nom, \n    }; \n  } \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"13",children:["\n",(0,a.jsxs)(n.li,{children:["Cr\xe9ez un nouveau fichier ",(0,a.jsx)(n.strong,{children:"databaseClient.dart"})," dans le dossier ",(0,a.jsx)(n.strong,{children:"services"})]}),"\n",(0,a.jsxs)(n.li,{children:["Nous commen\xe7ons par cr\xe9er la classe ",(0,a.jsx)(n.strong,{children:"DatabaseClient"}),". Compl\xe9tez la classe par le getter et la\nm\xe9thode ",(0,a.jsx)(n.strong,{children:"create()"})," qui va cr\xe9er la base de donn\xe9es :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:path_provider/path_provider.dart'; \nimport 'package:sqflite/sqflite.dart'; \nimport 'package:path/path.dart' as p; \nimport 'dart:io'; // pour l'utilisation de la classe Directory \n \nclass DatabaseClient { \n  Database? _database; \n \n  Future<Database?> get database async { \n    return _database ?? await create(); \n  } \n \n  Future create() async { \n    Directory directory = await getApplicationDocumentsDirectory(); \n    String databaseDirectory = p.join(directory.path, 'database.db'); \n \n    var bdd = \n        await openDatabase(databaseDirectory, version: 1, onCreate: _onCreate); \n    return bdd; \n  } \n \n  Future _onCreate(Database db, int version) async { \n    await db.execute( \n        \"CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY, nom TEXT)\"); \n    print(\"database created!\"); \n    await db.insert(\"item\", {'nom': 'tache1'}); \n  } \n"})}),"\n",(0,a.jsx)(n.h2,{id:"lecture-des-donn\xe9es-depuis-la-base-de-donn\xe9es-",children:"Lecture des donn\xe9es depuis la base de donn\xe9es :"}),"\n",(0,a.jsxs)(n.p,{children:["Nous allons maintenant ajouter dans la classe ",(0,a.jsx)(n.strong,{children:"DatabaseClient"})," les fonctions CRUD (create, read, update,\ndelete) permettant d\u2019\xe9crire et de lire depuis la base de donn\xe9es."]}),"\n",(0,a.jsxs)(n.ol,{start:"15",children:["\n",(0,a.jsx)(n.li,{children:"Ajoutez l\u2019import de item.dart dans databaseClient.dart pour utiliser la classe item :"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:todo/models/item.dart'; \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"16",children:["\n",(0,a.jsxs)(n.li,{children:["Ajoutez les fonctions qui permettent l\u2019\xe9criture et la lecture des donn\xe9es dans la classe\n",(0,a.jsx)(n.strong,{children:"DatabaseClient"})," :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"// Ecriture des donn\xe9es \nFuture<Item> ajouItem(Item item) async { \n  Database? maDatabase = await database; // fait appel au get database \n  item.id = await maDatabase?.insert('item', \n      item.toMap()); // la fontion insert renvoie un id qui va initialiser l'id de l'item en cours \n  return item; \n} \n \n// Lecture des donn\xe9es \nFuture<List<Item>> allItem() async { \n  Database? maDatabase = await database; \n  List<Map<String, dynamic>>? resultat = await maDatabase?.rawQuery( \n      'select * FROM item'); // Une liste de maps, chaque enregistrement est une //map \ncompos\xe9e de cl\xe9s valeurs nom, nom et id id \n  List<Item> items = []; \n  resultat?.forEach((map) { \n    Item item = Item(map); \n    items.add(item); \n  }); \n  return items; \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"17",children:["\n",(0,a.jsx)(n.li,{children:"Ajoutez les fonctions permettant de mettre \xe0 jour et la suppression des taches (items) de la base\nde donn\xe9es :"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future<int?> delete(int id, String table) async { \n  Database? maDatabase = await database; \n  return await maDatabase?.delete(table, where: 'id = ?', whereArgs: [id]); \n} \n \nFuture<int?> updateItem(Item item) async { \n  Database? maDatabase = await database; \n  return await maDatabase \n      ?.update('item', item.toMap(), where: 'id = ?', whereArgs: [item.id]); \n} \n"})}),"\n",(0,a.jsx)(n.h2,{id:"affichage-des-\xe9l\xe9ments-",children:"Affichage des \xe9l\xe9ments :"}),"\n",(0,a.jsx)(n.p,{children:"Nous allons maintenant afficher les \xe9l\xe9ments de la base de donn\xe9es."}),"\n",(0,a.jsxs)(n.ol,{start:"18",children:["\n",(0,a.jsxs)(n.li,{children:["Ajoutez l\u2019import de item et de DatasetClient dans ",(0,a.jsx)(n.strong,{children:"home_page.dart"})," :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:todo/models/item.dart'; \nimport 'package:todo/services/datasetClient.dart'; \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"19",children:["\n",(0,a.jsxs)(n.li,{children:["Ajoutez une liste dans la classe ",(0,a.jsx)(n.strong,{children:"_MyHomePageState"})," qui contiendra les objects Item repr\xe9sentants\nles taches de notre Todo list :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"List<Item> items = []; \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"20",children:["\n",(0,a.jsxs)(n.li,{children:["Remplace la section Center dans l\u2019attribut body de ",(0,a.jsx)(n.strong,{children:"Scaffold"})," avec le le composant ",(0,a.jsx)(n.strong,{children:"ListView"}),(0,a.jsx)(n.br,{}),"\n","(",(0,a.jsx)(n.strong,{children:"ListView.builder"})," ",(0,a.jsx)(n.em,{children:"creates a scrollable, linear array of widgets."}),") qui affichera l\u2019ensemble des taches\nde la base de donn\xe9es. Chaque t\xe2che sera affich\xe9e par le composant Flutter ",(0,a.jsx)(n.strong,{children:"ListTile"})," comme illustr\xe9\ndans le code suivant :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:'body: ListView.builder( \n  itemCount: items.length, \n  itemBuilder: (context, index) { \n    Item item = items[index]; \n    return Card( \n      shape: RoundedRectangleBorder( \n        borderRadius: BorderRadius.circular(10.0), // Rounded corners \n      ), \n      elevation: 5, // Shadow depth \n      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 5), // Spacing between cards \n      child: ListTile( \n        title: Text( \n          item.nom ?? "No name", \n          style: const TextStyle(color: Colors.black), \n        ), \n       trailing: IconButton( \n          icon: const Icon(Icons.delete, color: Colors.red), \n          onPressed: () {}, \n        ), \n        leading: IconButton( \n          icon: const Icon(Icons.edit, color: Colors.blue), \n          onPressed: () {}, \n        ), \n      ), \n    ); \n  }, \n), \n'})}),"\n",(0,a.jsxs)(n.ol,{start:"21",children:["\n",(0,a.jsxs)(n.li,{children:["Si la liste est vide un message \xab Aucune t\xe2che enregistr\xe9e dans votre liste \xbb. Pour ce faire, nous\nallons modifier le code pr\xe9c\xe9dant en v\xe9rifiant si la liste est vide avec ",(0,a.jsx)(n.strong,{children:"items.isEmpty"})," comme suit :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:'body: items.isEmpty \n    ?  Center( \n  child: Text( \n    "Aucune t\xe2che enregistr\xe9e dans votre liste", \n    style: TextStyle(fontSize: 20.0), \n  ), \n) \n    : ListView.builder( \n  itemCount: items.length, \n'})}),"\n",(0,a.jsxs)(n.ol,{start:"22",children:["\n",(0,a.jsxs)(n.li,{children:["Afin d\u2019int\xe9ragir avec la base de donn\xe9es, nous ajoutons la fonction ",(0,a.jsx)(n.strong,{children:"recuperer()"})," qui chargera les\ndonn\xe9es depuis la base de donn\xe9es en m\xe9moire, toujours dans  classe _MyHomePageState, apr\xe8s\nla fonction  ",(0,a.jsx)(n.strong,{children:"ajouter()"})," :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"void recuperer() async { \n  var itemsFromDB = await DatabaseClient().allItem(); \n  setState(() { \n    items = itemsFromDB; \n  }); \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"23",children:["\n",(0,a.jsxs)(n.li,{children:["Nous allons appeler la fonction recuperer() d\xe8s le chargement du composant au sein de la fonction\ninitState(). Ajoutez la fonction iniState() juste apr\xe8s les d\xe9clarations de la liste ",(0,a.jsx)(n.strong,{children:"items"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"@override \nvoid initState() { \n  super.initState(); \n  recuperer(); \n} \n"})}),"\n",(0,a.jsx)(n.h2,{id:"ajout-des-\xe9l\xe9ments-",children:"Ajout des \xe9l\xe9ments :"}),"\n",(0,a.jsx)(n.p,{children:"Nous allons maintenant compl\xe9ter la partie du code qui permettra de rajouter un \xe9l\xe9ment \xe0 la base\nde donn\xe9es quand le bouton valider est press\xe9. Ce bouton est g\xe9r\xe9 dans la fonction ajouter et pour le\nmoment, il fait simplement disparaitre la boite de dialogue."}),"\n",(0,a.jsxs)(n.ol,{start:"24",children:["\n",(0,a.jsxs)(n.li,{children:["Nous allons donc cr\xe9er une nouvelle classe ",(0,a.jsx)(n.strong,{children:"AddTaskDialog"})," dans un nouveau fichier\n",(0,a.jsx)(n.strong,{children:"screens/add_task_dialog.dart"}),", voici le contenu de la classe :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart'; \nimport 'package:todo_tmp/models/item.dart'; \n \nclass AddTaskDialog extends StatefulWidget { \n  final Item? item; \n \n  const AddTaskDialog({Key? key, this.item}) : super(key: key); \n \n  @override \n  _AddTaskDialogState createState() => _AddTaskDialogState(); \n} \n \nclass _AddTaskDialogState extends State<AddTaskDialog> { \n  late TextEditingController _controller; \n \n  @override \n  void initState() { \n    super.initState(); \n    _controller = TextEditingController(text: widget.item?.nom ?? ''); \n  } \n \n  @override \n  void dispose() { \n    _controller.dispose(); \n    super.dispose(); \n  } \n \n  @override \n  Widget build(BuildContext context) { \n    return AlertDialog( \n      title: Text(widget.item == null ? 'Ajouter une t\xe2che' : 'Modifier la t\xe2che'), \n      content: TextField( \n        controller: _controller, \n        decoration: const InputDecoration(hintText: \"Nom de la t\xe2che\"), \n      ), \n      actions: <Widget>[ \n        TextButton( \n          child: const Text('Annuler'), \n          onPressed: () => Navigator.of(context).pop(),\n                ), \n        TextButton( \n          child: const Text('Valider'), \n          onPressed: () { \n            Navigator.of(context).pop(_controller.text); \n          }, \n        ), \n      ], \n    ); \n  } \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"25",children:["\n",(0,a.jsxs)(n.li,{children:["Modifiez la fonction ajouter dans la classe ",(0,a.jsx)(n.strong,{children:"_MyHomePageState"})," comme suit afin d\u2019appeler la\nnouvelle classe ",(0,a.jsx)(n.strong,{children:"AddTaskDialog"})," :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future<void> ajouter({Item? item}) async { \n  final result = await showDialog<String>( \n    context: context, \n    builder: (context) => AddTaskDialog(item: item), \n  ); \n  } \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"26",children:["\n",(0,a.jsx)(n.li,{children:"Rajoutez la nouvelle classe dans l\u2019import comme suit :"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:todo/screens/add_task_dialog.dart'; \n"})}),"\n",(0,a.jsx)(n.h2,{id:"mise-\xe0-jour-des-\xe9l\xe9ments-",children:"Mise \xe0 jour des \xe9l\xe9ments :"}),"\n",(0,a.jsx)(n.p,{children:"Nous allons maintenant modifier le code afin que l\u2019utilisateur puisse modifier le nom des t\xe2ches."}),"\n",(0,a.jsxs)(n.ol,{start:"27",children:["\n",(0,a.jsxs)(n.li,{children:["Ajoutez dans la classe ",(0,a.jsx)(n.strong,{children:"DatabaseClient"})," la fonction ",(0,a.jsx)(n.strong,{children:"update_or_insert"})," qui fait soit la mise \xe0 jour ou\nl\u2019insertion dont on aura besoin plus tard dans la fonction ",(0,a.jsx)(n.strong,{children:"ajouter"})," et et le bouton ",(0,a.jsx)(n.strong,{children:"edit"})," dans\n",(0,a.jsx)(n.strong,{children:"home_page.dart"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future<void> update_or_insert(Item item) async { \n  Database? maDatabase = await database; \n  if (item.id == null) { \n    await maDatabase?.insert('item', item.toMap()); \n  } else { \n    await maDatabase \n        ?.update('item', item.toMap(), where: 'id = ?', whereArgs: [item.id]); \n  } \n} \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"28",children:["\n",(0,a.jsxs)(n.li,{children:["Modifiez la fonction ",(0,a.jsx)(n.strong,{children:"onPressed"})," de l\u2019icon ",(0,a.jsx)(n.strong,{children:"edit"})," dans ",(0,a.jsx)(n.strong,{children:"ListTile"})," par le code suivant :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"onPressed: () => ajouter(item: item) \n"})}),"\n",(0,a.jsxs)(n.ol,{start:"29",children:["\n",(0,a.jsxs)(n.li,{children:["Modifiez la fonction ajouter en faisant appel \xe0 la fonction ",(0,a.jsx)(n.strong,{children:"update_or_insert()"})," de ",(0,a.jsx)(n.strong,{children:"DatasetClient"}),",\nNous devons aussi changer la fonction ",(0,a.jsx)(n.strong,{children:"ajouter()"}),". Nous devons lui ajouter un param\xe8tre ",(0,a.jsx)(n.strong,{children:"item"}),". Si (result==null) de la fonction showdialog nous appliquons une insertion sinon nous appliquons une\nmise \xe0 jour si l\u2019item existe dans la base de donn\xe9es :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"Future<void> ajouter({Item? item}) async { \nfinal result = await showDialog<String>( \ncontext: context, \nbuilder: (context) => AddTaskDialog(item: item), \n); \nif (result != null && result.isNotEmpty) { \nDatabaseClient().update_or_insert(Item({'nom': result, 'id': item?.id})).then((_) => \nrecuperer()); \n} \n} \n"})}),"\n",(0,a.jsx)(n.p,{children:"a. Surpression des \xe9l\xe9ments :"}),"\n",(0,a.jsxs)(n.p,{children:["Nous allons maintenant lier l\u2019interface avec la fonction qui permet de supprimer les \xe9l\xe9ments de la\nbase de donn\xe9es en utilisant la fonction ",(0,a.jsx)(n.strong,{children:"DatabaseClient.delete()"}),"."]}),"\n",(0,a.jsxs)(n.ol,{start:"30",children:["\n",(0,a.jsxs)(n.li,{children:["Dans le fichier ",(0,a.jsx)(n.strong,{children:"home_page.dart"})," le composant ListTile affiche chaque \xe9l\xe9ment de liste. Modifiez\nl\u2019attribut ",(0,a.jsx)(n.strong,{children:"onPressed :()"})," du bouton delete afin qu\u2019il fasse appel \xe0 la fonction ",(0,a.jsx)(n.strong,{children:"delete()"})," de la classe\ndatasetClient comme suit :"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"onPressed: () => DatabaseClient().delete(item.id ?? 0, \n'item').then((_) => recuperer()), \n"})}),"\n",(0,a.jsx)(n.p,{children:"Voici le r\xe9sultat final :"}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",margin:"20px 0",width:"300px"},children:(0,a.jsx)("img",{src:t(4927).A,alt:"DevNotes App - Liste des notes",style:{display:"block",marginLeft:"500px",maxWidth:"100%",height:"auto"}})}),"\n",(0,a.jsx)(n.p,{children:"Assurez-vous d\u2019avoir l\u2019arborescence suivante des fichiers dans votre projet :"}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"20px",margin:"20px 0",width:"300px"},children:(0,a.jsx)("img",{src:t(1497).A,alt:"DevNotes App - Liste des notes",style:{display:"block",marginLeft:"500px",maxWidth:"100%",height:"auto"}})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);