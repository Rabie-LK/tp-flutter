---
title: "TP2"
description: "Deuxième séance de travaux pratiques avec Flutter"
id: flutter-tp2
slug: /flutter-tp2
---

# Flutter - TP2


Flutter met à disposition une dépendance qui permet de manipuler les bases de données de type 
SQLite : **SqfLite**.

L’objectif de cette séance de travaux pratiques est : 

- Découvrir et manipuler les bases de données SQLite avec Flutter 
- Structurer un projet flutter en faisant séparation entre la partie UI et la partie logique.  
- Utilisation de FloatingActionButton et ListView.  
- Apprendre à intégrer le null safety de dart. 



## **Création de l’interface de base de l’application**

1. Créez un nouveau projet Flutter avec nom de projet **todo**. Puis mettez le code suivant dans le 
fichier **lib/main.dart**  

```dart
import 'package:flutter/material.dart'; 
void main() { 
runApp(const MyApp()); 
} 
class MyApp extends StatelessWidget { 
const MyApp({Key? key}) : super(key: key); 
@override 
Widget build(BuildContext context) { 
return MaterialApp( 
title: 'My ToDo App', 
theme: ThemeData( 
primarySwatch: Colors.amber, 
), 
home: const MyHomePage(title: 'My Todo App'), 
debugShowCheckedModeBanner: false, 
); 
} 
} 
```

2.Créer un nouveau dossier sous le nom de screens, puis ajouter un fichier dart sous le nom de 
**lib/dart/screens/home_page.dart**. mettez le code suivant : 



```dart
import 'package:flutter/material.dart'; 
 
class MyHomePage extends StatefulWidget { 
  const MyHomePage({Key? key, required this.title}) : super(key: key); 
 
  final String title; 
 
  @override 
  State<MyHomePage> createState() => _MyHomePageState(); 
} 
 
class _MyHomePageState extends State<MyHomePage> { 
  @override 
  Widget build(BuildContext context) { 
    return Scaffold( 
      appBar: AppBar( 
        title: Text(widget.title), 
      ), 
      // Corps vide pour commencer 
      body: Center( 
        child: Text('Bienvenue dans votre application ToDo!'), 
      ), 
    
    ); 
  } 
} 
```


3. Rajouter ensuite la liaison entre **lib/main.dart** et **lib/screens/home_page.dart** avec l’import 
suivant dans le fichier **main.dart** :  
```dart
import 'package:todo/screens/home_page.dart';
```

4. Compiler et lancer l’application sur l’émulateur, ceci est le résultat espéré :  

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', width: '300px' }}>
  <img
    src={require('../../img/ccc.png').default}
    alt="DevNotes App - Liste des notes"
    style={{ display: 'block', marginLeft: '500px', maxWidth: '100%', height: 'auto' }}
  />
</div>


5. Pour ajouter des éléments à la liste **todo** qui seront stockés dans la base de données, nous 
ajoutons un bouton **FloatingActionButton** à la **Scaffold** sous l’attribut **body**. Pour cela, ajoutez le 
code suivant qui contient une icon « add » et une fonction vide dans **onPressed** qu’on rajoutera 
plus tard pour l’ajout des éléments :  
```dart
floatingActionButton: FloatingActionButton( 
onPressed: () { 
// Action pour ajouter une nouvelle tâche sera implémentée ici 
}, 
tooltip: 'Ajouter une tâche', 
child: const Icon(Icons.add, color: Colors.white), 
backgroundColor: Colors.teal, 
), 
```
6. Nous ajoutons ensuite à l’attribue **onPressed** la fonction **ajouter()** qui nous permettra d’ajouter 
des éléments à liste todo. Pour cela Ajoutez la fonction suivante dans la classe 
**_MyHomePageState** dans le fichier **home_page.dart**. 

```dart
Future<void> ajouter() async { 
await showDialog<void>( 
context: context, 
barrierDismissible: false, // si on appuie à l’extérieur 
//ça ne va pas disparaitre 
builder: (BuildContext dialogContext) { 
return AlertDialog( 
title: const Text('Ajouter une liste de tâches'), 
content: const Text('DialogBody'), 
actions: <Widget>[ 
TextButton( 
child: const Text('buttonText'), 
onPressed: () { 
Navigator.of(dialogContext).pop(); 
}, 
), 
], 
); 
}, 
); 
} 
```
7. Nous faisons appel à cette fonction dans FloatingActionButton comme suit :  

```dart
onPressed: () => ajouter(), 
```

8. La fonction **ajouter()** est de type asynchrone, c’est pour cela qu’elle est de type **Future**. Il faudra 
aussi importer : *import 'dart:async;*





## Configuration de la base de données :  

Nous allons maintenant traiter la partie logique de l’application, pour cela nous commençons avec la 
configuration de la base de données. Nous utiliserons dans ce **TP SQFITE** (plugin Flutter de **SQLite** : 
https://pub.dev/packages/sqflite)  

9. Pour installer SQflite ajoutez la dépendance :   sqflite : ^2.0.2+1 au fichier pubspec.yaml 
Ou alors ouvrez le terminal de votre editeur et entrez la commande : flutter pub add 
sqflite. 
Vous allez alors avoir le résultat suivant dans le fichier pubspec.yaml  

10. Dans le même fichier, ajoutez également la dépendance vers le path provider : ^2.0.10 (ou lancer 
flutter pub add path_provider), qui permet d’obtenir les chemins d’accès vers les fichiers au sein 
de l’application (notamment les dossiers de l’application). Si l’ajout s’est fait correctement vous 
aurez le résultat suivant : 

```dart
dependencies: 
flutter: 
sdk: flutter 
sqflite: ^2.0.2+1 
path_provider: ^2.0.10  
```

11. Appliquer le changement en appuyant sur **Pub get** sur Android Studio (ou lancer la commande **flutter pub get** ou **dart pub get**) 



## Création de la base de données : 

Nous allons créer la classe qui gère la liste de taches associées à la base de données. 

12. Allez dans le dossier lib, créez un nouveau dossier en lui donnant le nom models, et dans ce nouveau package créer un fichier **models/item.dart** puis écrivez la classe Item suivante :  


```dart
class Item { 
  int? id; 
  String? nom; 
 
  Item(Map<String, dynamic> map) { 
    id = map['id']; 
    nom = map['nom'] ?? ""; 
  } 
 
  Map<String, dynamic> toMap() { 
    return { 
      'id': id, 
      'nom': nom, 
    }; 
  } 
} 
```
13. Créez un nouveau fichier **databaseClient.dart** dans le dossier **services** 
14. Nous commençons par créer la classe **DatabaseClient**. Complétez la classe par le getter et la 
méthode **create()** qui va créer la base de données : 

```dart
import 'package:path_provider/path_provider.dart'; 
import 'package:sqflite/sqflite.dart'; 
import 'package:path/path.dart' as p; 
import 'dart:io'; // pour l'utilisation de la classe Directory 
 
class DatabaseClient { 
  Database? _database; 
 
  Future<Database?> get database async { 
    return _database ?? await create(); 
  } 
 
  Future create() async { 
    Directory directory = await getApplicationDocumentsDirectory(); 
    String databaseDirectory = p.join(directory.path, 'database.db'); 
 
    var bdd = 
        await openDatabase(databaseDirectory, version: 1, onCreate: _onCreate); 
    return bdd; 
  } 
 
  Future _onCreate(Database db, int version) async { 
    await db.execute( 
        "CREATE TABLE IF NOT EXISTS item (id INTEGER PRIMARY KEY, nom TEXT)"); 
    print("database created!"); 
    await db.insert("item", {'nom': 'tache1'}); 
  } 
```

## Lecture des données depuis la base de données : 

Nous allons maintenant ajouter dans la classe **DatabaseClient** les fonctions CRUD (create, read, update, 
delete) permettant d’écrire et de lire depuis la base de données. 

15. Ajoutez l’import de item.dart dans databaseClient.dart pour utiliser la classe item : 

```dart
import 'package:todo/models/item.dart'; 
```
16. Ajoutez les fonctions qui permettent l’écriture et la lecture des données dans la classe 
**DatabaseClient** : 

```dart
// Ecriture des données 
Future<Item> ajouItem(Item item) async { 
  Database? maDatabase = await database; // fait appel au get database 
  item.id = await maDatabase?.insert('item', 
      item.toMap()); // la fontion insert renvoie un id qui va initialiser l'id de l'item en cours 
  return item; 
} 
 
// Lecture des données 
Future<List<Item>> allItem() async { 
  Database? maDatabase = await database; 
  List<Map<String, dynamic>>? resultat = await maDatabase?.rawQuery( 
      'select * FROM item'); // Une liste de maps, chaque enregistrement est une //map 
composée de clés valeurs nom, nom et id id 
  List<Item> items = []; 
  resultat?.forEach((map) { 
    Item item = Item(map); 
    items.add(item); 
  }); 
  return items; 
} 
```

17. Ajoutez les fonctions permettant de mettre à jour et la suppression des taches (items) de la base 
de données : 
```dart
Future<int?> delete(int id, String table) async { 
  Database? maDatabase = await database; 
  return await maDatabase?.delete(table, where: 'id = ?', whereArgs: [id]); 
} 
 
Future<int?> updateItem(Item item) async { 
  Database? maDatabase = await database; 
  return await maDatabase 
      ?.update('item', item.toMap(), where: 'id = ?', whereArgs: [item.id]); 
} 
```
## Affichage des éléments : 


Nous allons maintenant afficher les éléments de la base de données. 
 
18. Ajoutez l’import de item et de DatasetClient dans **home_page.dart** : 

```dart
import 'package:todo/models/item.dart'; 
import 'package:todo/services/datasetClient.dart'; 
```


19. Ajoutez une liste dans la classe **_MyHomePageState** qui contiendra les objects Item représentants 
les taches de notre Todo list :  
```dart
List<Item> items = []; 
```


20. Remplace la section Center dans l’attribut body de **Scaffold** avec le le composant **ListView**  
(**ListView.builder** *creates a scrollable, linear array of widgets.*) qui affichera l’ensemble des taches 
de la base de données. Chaque tâche sera affichée par le composant Flutter **ListTile** comme illustré 
dans le code suivant :  

```dart
body: ListView.builder( 
  itemCount: items.length, 
  itemBuilder: (context, index) { 
    Item item = items[index]; 
    return Card( 
      shape: RoundedRectangleBorder( 
        borderRadius: BorderRadius.circular(10.0), // Rounded corners 
      ), 
      elevation: 5, // Shadow depth 
      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 5), // Spacing between cards 
      child: ListTile( 
        title: Text( 
          item.nom ?? "No name", 
          style: const TextStyle(color: Colors.black), 
        ), 
       trailing: IconButton( 
          icon: const Icon(Icons.delete, color: Colors.red), 
          onPressed: () {}, 
        ), 
        leading: IconButton( 
          icon: const Icon(Icons.edit, color: Colors.blue), 
          onPressed: () {}, 
        ), 
      ), 
    ); 
  }, 
), 
```


21. Si la liste est vide un message « Aucune tâche enregistrée dans votre liste ». Pour ce faire, nous 
allons modifier le code précédant en vérifiant si la liste est vide avec **items.isEmpty** comme suit :  
```dart
body: items.isEmpty 
    ?  Center( 
  child: Text( 
    "Aucune tâche enregistrée dans votre liste", 
    style: TextStyle(fontSize: 20.0), 
  ), 
) 
    : ListView.builder( 
  itemCount: items.length, 
```
22. Afin d’intéragir avec la base de données, nous ajoutons la fonction **recuperer()** qui chargera les 
données depuis la base de données en mémoire, toujours dans  classe _MyHomePageState, après 
la fonction  **ajouter()** : 
```dart 
void recuperer() async { 
  var itemsFromDB = await DatabaseClient().allItem(); 
  setState(() { 
    items = itemsFromDB; 
  }); 
} 
```


23. Nous allons appeler la fonction recuperer() dès le chargement du composant au sein de la fonction 
initState(). Ajoutez la fonction iniState() juste après les déclarations de la liste **items**: 

```dart 
@override 
void initState() { 
  super.initState(); 
  recuperer(); 
} 
```

## Ajout des éléments :
Nous allons maintenant compléter la partie du code qui permettra de rajouter un élément à la base 
de données quand le bouton valider est pressé. Ce bouton est géré dans la fonction ajouter et pour le 
moment, il fait simplement disparaitre la boite de dialogue.  
 
24. Nous allons donc créer une nouvelle classe **AddTaskDialog** dans un nouveau fichier 
**screens/add_task_dialog.dart**, voici le contenu de la classe : 

```dart 
import 'package:flutter/material.dart'; 
import 'package:todo_tmp/models/item.dart'; 
 
class AddTaskDialog extends StatefulWidget { 
  final Item? item; 
 
  const AddTaskDialog({Key? key, this.item}) : super(key: key); 
 
  @override 
  _AddTaskDialogState createState() => _AddTaskDialogState(); 
} 
 
class _AddTaskDialogState extends State<AddTaskDialog> { 
  late TextEditingController _controller; 
 
  @override 
  void initState() { 
    super.initState(); 
    _controller = TextEditingController(text: widget.item?.nom ?? ''); 
  } 
 
  @override 
  void dispose() { 
    _controller.dispose(); 
    super.dispose(); 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return AlertDialog( 
      title: Text(widget.item == null ? 'Ajouter une tâche' : 'Modifier la tâche'), 
      content: TextField( 
        controller: _controller, 
        decoration: const InputDecoration(hintText: "Nom de la tâche"), 
      ), 
      actions: <Widget>[ 
        TextButton( 
          child: const Text('Annuler'), 
          onPressed: () => Navigator.of(context).pop(),
                ), 
        TextButton( 
          child: const Text('Valider'), 
          onPressed: () { 
            Navigator.of(context).pop(_controller.text); 
          }, 
        ), 
      ], 
    ); 
  } 
} 
```


25. Modifiez la fonction ajouter dans la classe **_MyHomePageState** comme suit afin d’appeler la 
nouvelle classe **AddTaskDialog** :  
```dart
Future<void> ajouter({Item? item}) async { 
  final result = await showDialog<String>( 
    context: context, 
    builder: (context) => AddTaskDialog(item: item), 
  ); 
  } 
```

26. Rajoutez la nouvelle classe dans l’import comme suit : 
```dart
import 'package:todo/screens/add_task_dialog.dart'; 
```

## Mise à jour des éléments :  
Nous allons maintenant modifier le code afin que l’utilisateur puisse modifier le nom des tâches.  
 
27. Ajoutez dans la classe **DatabaseClient** la fonction **update_or_insert** qui fait soit la mise à jour ou 
l’insertion dont on aura besoin plus tard dans la fonction **ajouter** et et le bouton **edit** dans 
**home_page.dart**:  

```dart
Future<void> update_or_insert(Item item) async { 
  Database? maDatabase = await database; 
  if (item.id == null) { 
    await maDatabase?.insert('item', item.toMap()); 
  } else { 
    await maDatabase 
        ?.update('item', item.toMap(), where: 'id = ?', whereArgs: [item.id]); 
  } 
} 
```

28. Modifiez la fonction **onPressed** de l’icon **edit** dans **ListTile** par le code suivant : 

```dart
onPressed: () => ajouter(item: item) 
```

29. Modifiez la fonction ajouter en faisant appel à la fonction **update_or_insert()** de **DatasetClient**, 
Nous devons aussi changer la fonction **ajouter()**. Nous devons lui ajouter un paramètre **item**. Si (result==null) de la fonction showdialog nous appliquons une insertion sinon nous appliquons une 
mise à jour si l’item existe dans la base de données :   

```dart
Future<void> ajouter({Item? item}) async { 
final result = await showDialog<String>( 
context: context, 
builder: (context) => AddTaskDialog(item: item), 
); 
if (result != null && result.isNotEmpty) { 
DatabaseClient().update_or_insert(Item({'nom': result, 'id': item?.id})).then((_) => 
recuperer()); 
} 
} 
```
a. Surpression des éléments : 

Nous allons maintenant lier l’interface avec la fonction qui permet de supprimer les éléments de la 
base de données en utilisant la fonction **DatabaseClient.delete()**.

30. Dans le fichier **home_page.dart** le composant ListTile affiche chaque élément de liste. Modifiez 
l’attribut **onPressed :()** du bouton delete afin qu’il fasse appel à la fonction **delete()** de la classe 
datasetClient comme suit :  

```dart
onPressed: () => DatabaseClient().delete(item.id ?? 0, 
'item').then((_) => recuperer()), 
```

Voici le résultat final :  
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', width: '300px' }}>
  <img
    src={require('../../img/ee.png').default}
    alt="DevNotes App - Liste des notes"
    style={{ display: 'block', marginLeft: '500px', maxWidth: '100%', height: 'auto' }}
  />
</div>

Assurez-vous d’avoir l’arborescence suivante des fichiers dans votre projet :  


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', width: '300px' }}>
  <img
    src={require('../../img/ddd.png').default}
    alt="DevNotes App - Liste des notes"
    style={{ display: 'block', marginLeft: '500px', maxWidth: '100%', height: 'auto' }}
  />
</div>
