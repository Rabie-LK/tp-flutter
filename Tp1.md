---
title: "Flutter – TP1"
description: "Première séance de travaux pratiques avec Flutter"
id: flutter-tp1
slug: /flutter-tp1
---

# Flutter TP1

Les objectifs de cette première séance de travaux pratiques Flutter sont :

- **🟦 Découvrir et manipuler la notion des Widgets**
- **🟦 Manipuler les styles**

---

## **Exercice 1 : Scaffold et AppBar**

- Créez une nouvelle application Flutter intitulée « MyApp ». Reportez-vous à la notice d’installation si vous ne savez pas comment créer un projet Flutter.
- Le projet contient un répertoire « Lib » contenant à ce stade juste un fichier « main.dart ».
- Double cliquez sur le fichier « main.dart » pour l’éditer.
- Supprimez complètement le contenu de la classe `MyApp` car nous allons recréer l'interface graphique à partir de zero.



Nous allons créer notre propre classe `MyApp` :

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}
```
Exécutez le code en sélectionnant un émulateur ou un smartphone et en cliquant ensuite sur le triangle vert. Observez le résultat.


Nous aurons un écran noir, car il manque la propriété **home** dans `MaterialApp`.

Pour voir la liste des arguments possibles, appuyez sur **🔴 Ctrl + Espace** à l'intérieur des parenthèses de `MaterialApp()`.

Définissez **Scaffold()** comme widget pour le `home` :

```dart
return MaterialApp(home: Scaffold(),);
```

Il n'y a plus d'erreur, nous avons une application avec un écran blanc. Nous avons écrit un **StatelessWidget** qui construit les deux widgets les plus importants de Flutter : `MaterialApp` et `Scaffold`.

- `MaterialApp` permet de contrôler l'apparence (couleur, taille de texte, thème global).
- `Scaffold` gère tout ce qui apparaît sur l'écran.

Pour retirer le debug banner, ajoutez au `MaterialApp` le paramètre suivant :

```dart
debugShowCheckedModeBanner: false,
```

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('/img/02.png').default}

    alt="DevNotes App - Liste des notes"

    width={300}

  />

  <img

    src={require('/img/01.png').default}

    alt="DevNotes App - Création d'une note"

    width={300}

  />

</div>


Sélectionnez la classe **MyApp** et reformatez le code en sélectionnant après un clic droit de la souris **Reformat Code dartfmt**.

Voici le code de votre classe maintenant :

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```


On peut changer la couleur du background :  
```dart
home: Scaffold(backgroundColor: Colors.green,), 
```

---
## **Ajout d'une AppBar et d'un Bottom NavigationBar**

Ajoutez une `AppBar` : il faut ajouter un titre à l’AppBar avec le paramètre title et centrez ce titre, et changez la couleur de l’AppBar.  

```dart
home: Scaffold(
  backgroundColor: Colors.greenAccent,
  appBar: AppBar(
    backgroundColor: Colors.blue,
    title: Text("Hello in my app"),
    centerTitle: true,
  ),
)
```




<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/05.png').default}

    alt="DevNotes App - Liste des notes"
    width={300}
    

  />

</div>
Ajoutez des icônes dans la `AppBar` :

```dart
actions: [
  Icon(Icons.account_circle),
  Icon(Icons.icecream),
  Icon(Icons.access_alarm_sharp),
  Icon(Icons.account_balance_rounded),
],
```



<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/06.png').default}

    alt="DevNotes App - Liste des notes"
    width={300}
    

  />

</div>

Ajoutez un `BottomNavigationBar`  juste en dessous de l'`AppBar`: 

```dart
bottomNavigationBar: BottomNavigationBar(
  items: [
    BottomNavigationBarItem(label: ('Account'), icon: Icon(Icons.circle)),
    BottomNavigationBarItem(label: ('Alert'), icon: Icon(Icons.add_alert)),
  ]
),
```


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/09.png').default}

    alt="DevNotes App - Liste des notes"
    width={300}
    

  />

</div>

Pour ajouter l'interaction avec les icônes de la barre de navigation on doit ajouter le code suivant au **bottomNavigationBar** :  

```dart
onTap: (indexpushed) {
  print('Bonjour Flutter Ex1');
  print(indexpushed);
},
```
Pour gérer la valeur de l’icône cliquée on utilisera une variable entière : index (variable classe)  
```dart
int index = 0 ;
```

La variable currentIndex de l’objet le **bottomNavigationBar** désigne l’icône qui est sélectionnée. Initialisez cette variable 
```dart
currentIndex: index,
```

Pour gérer la logique de la barre de navigation il faut mettre à jour le currentIndex à chaque fois qu’une icône 
est cliquée, dans la fonction **onTap()**
```dart
index = indexpushed;
```
Pour le que le changement soit dynamique il faut faire appel à la fonction setState qui reconstruit l’IHM en 
fonction des évènements. Mais cette fonction n’est disponible que pour les classes StatefullWidget. Il faut 
alors transformer la classe StatelessWidget MyApp.  

Sélectionnez le nom de la classe StatelessWidget et appuyez sur Alt + entrée ensuite convert to 
StatefullWidget   

Ajoutez la fonction setState à la fonction onTap()  

```dart
setState(()  
{ 
index = indexpushed; 
}); 
```


On peut également changer les couleurs des icones quand elles sont sélectionnées, dans l’objet 
bottomNavigationBar: 

```dart
selectedItemColor: Colors.pink, 
unselectedItemColor: Colors.yellow, 
```

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/07.png').default}

    alt="DevNotes App - Liste des notes"

         width={300}

  />

</div>

Vous pouvez supprimer les print dans la fonction **onTap()** maintenant 



---

## **Ajout d'une Image et d'un Bouton Interactif**

Ajoutez une image dans le `body` du `Scaffold` :

```dart
body: Image.network("https://i.insider.com/5de6df0d695b583f4f17f695?width=700"),
```


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/10.png').default}

    alt="DevNotes App - Liste des notes"
     width={300}
        

  />

</div>

Nous allons ensuite mettre en place un widget `Column` qui permet de placer plusieurs widgets les uns après les autres. 
```dart
body: Column(
  children: [
    Image.network("https://i.insider.com/5de6df0d695b583f4f17f695?width=700"),
  ],
),
```

Ajoutez un `IconButton` juste après votre image ::

```dart
IconButton(
  icon: Icon(Icons.add_box),
  onPressed: () {
    print("Mon image");
  },
),
```

Ajoutez un compteur qui s'affiche à l'écran et qui s'incrémente à chaque clic :

```dart
int number = 0;
```

Ajoutez un `Text` pour afficher le compteur :

```dart
Text(number.toString()),
```

Mettez à jour `number` dans la fonction `onPressed` du `IconButton` :

```dart
setState(() {
  number++;
});
```
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/12.png').default}

    alt="DevNotes App - Liste des notes"
    width={300}
        

  />

</div>



Ajoutez un bouton permettant de décrémenter la valeur. Le résultat attendu doit ressembler à ceci :

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('../../img/13.png').default}

    alt="DevNotes App - Liste des notes"

      width={300}  

  />

</div>
---

On va maintenant séparer le code en deux fichiers pour plus de lisibilité : 
- Créez un nouveau fichier `home_page.dart` (en minuscule) 
- Ajoutez le premier import  
```dart
import 'package:flutter/material.dart'; 
```
- Ajoutez une classe `StatefullWidget : HomePage`


Pour générer automatiquement une classe `StatefullWidget` vous pouvez créer une classe `StatelessWidget` et ensuite la transformer en Statefullwidget, comme fait précédemment.



```dart
class HomePage extends StatefulWidget { 
  @override 
  _HomePageState createState() => _HomePageState(); 
} 
 
class _HomePageState extends State<HomePage> { 
  @override 
  Widget build(BuildContext context) { 
 
    return  MaterialApp(); 
  } 
}  
```

Cette classe va renvoyer le :  `Scaffold()` 
 
Copiez et retirez le contenu de l’objet `Scaffold(..)` depuis le fichier `main.dart` et l’insérer dans le `Scaffold(..)` de la classe `_HomePageState()` que vous créerez dans `MaterialApp()`. 
 
Copiez aussi les deux variables : (déclarations à placer avant le @override de la classe _HomePageState)  
```dart
int index = 0; 
int number = 0; 
```
 
 
On se déplace maintenant dans le fichier `main.dart`  
 
Il faut importer le fichier `home_page.dart` 
```dart 
import 'home_page.dart'; 
``` 
Ajoutez à la propriété home :  la fonction `HomePage()` qui va appeler la classe qui va construire l’IHM  
 
 ```dart 
home : HomePage() 
 ``` 

 Exécutez, vous aurez le même rendu que l’exercice précédent mais avec plus de lisibilité dans le code.
 

---

## **Exercice 2 : Navigation entre les pages**

Nous allons maintenant implémenter la logique de navigation entre les pages avec un bouton pour naviguer 
entre deux pages. 

Ajoutez un `IconButton` pour la navigation :

```dart
IconButton(icon: Icon(Icons.arrow_right), onPressed: (){})
```

Créez un nouveau fichier pour la nouvelle page. Pour cela créez un nouveau fichier `second_page.dart` :



```dart
import 'package:flutter/material.dart';
```


Ajoutez  la classes **SecondPage** comme étant un `StatelessWidget` :  
```dart
class SecondPage extends StatelessWidget { 
  @override 
  Widget build(BuildContext context) { 
 
    return  Scaffold(); 
  } 
}
```

Ajoutez une `AppBar` à votre `Scaffold` 
 
Maintenant il faut définir un nom (route) pour cette page. Ajoutez à la classe **SecondPage** (avant le @override) 
le nom de la route qui permettra de pointer vers cette nouvelle page :  

```dart
static const tag = "second_page"; 
```
Revenant maintenant au fichier `main.dart`. Ajoutez un import du fichier `second_page.dart`  
```dart
import 'second_page.dart';
```



Nous allons ajouter des routes dans le composant `MaterialApp()`  
 
Ajoutez l’instruction suivante après l’instruction :  `debugShowCheckedModeBanner`

```dart
routes: {SecondPage.tag: (context) => SecondPage()},
```
Maintenant il faut appeler cette route.  Revenez au fichier `home_page.dart` :  
 
Ajoutez un import du fichier `second_page.dart`  
```dart
import 'second_page.dart'; 
```
Mettez à jour le **IconButton** pour mettre en œuvre la logique de navigation : 
```dart
IconButton(
  icon: Icon(Icons.arrow_right),
  onPressed: () {
    Navigator.of(context).pushNamed(SecondPage.tag);
  },
)
```
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('/img/14.png').default}

    alt="DevNotes App - Liste des notes"

    width={300}

  />

  <img

    src={require('/img/15.png').default}

    alt="DevNotes App - Création d'une note"

    width={300}

  />

</div>
---

## **Exercice 3 : Bombe**

Réalisez l'exercice simulant une bombe en partant du projet **Flutter Application** de base.
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>

  <img

    src={require('/img/17.png').default}

    alt="DevNotes App - Liste des notes"

    width={300}

  />

  <img

    src={require('/img/16.png').default}

    alt="DevNotes App - Création d'une note"

    width={300}

  />

</div>

---

## **Exercice 4 : Une deuxième Interface avec le body**

 Créez une nouvelle application Flutter intitulée « **MyApp** » et remplacez le code du fichier  « **main.dart** » par le code ci-dessous. 

```dart
import 'package:flutter/material.dart'; 
 
void main() { 
  runApp(MyApp()); 
} 
// Expression équivalente 
// void main() => runApp(MyApp()); 
 
class MyApp extends StatelessWidget { 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp(home: Text('Hello World!'),); 
  } 
} 

```
 
Nous allons maintenant remplacer le texte « **Hello World** » par un `Widget Scaffold` qui gère l’espace de la 
fenêtre dans lequel nous allons définir un `Widget AppBar` qui contiendra le titre de l’application (Widget Text) 
et un `Widget Body` qui contiendra un Widget Text qui contiendra le texte par défaut.  
Adaptez le code comme suit : 
```dart
import 'package:flutter/material.dart'; 
 
void main() => runApp(MyApp()); 
 
class MyApp extends StatelessWidget { 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      home: Scaffold( 
        appBar: AppBar(    
          title: Text('Mon App Flutter'), 
        ), // AppBar 
        body: Text('Texte par défaut'), 
      ), // Scaffold   
    ) ; // MaterialApp 
  } 
} 
```


Exécutez le code et observez les changements. 


Nous allons maintenant améliorer le Body de l’application pour y disposer d’autres objets tels que des boutons 
(`Widget RaisedButton`). Nous allons également remplacer le `Widget Text` du body par un `Widget invisible` de type 
Column qui définit une colonne dans le body qui peut accueillir plusieurs Widgets enfants (children). Chaque 
bouton à une propriété child qui fait référence à un widget Text qui permet d’écrire sur le bouton et un évènement 
de type **onPressed** qui pour le moment ne fait référence à rien (null). 
Adaptez le code précédent comme suit : 

```dart
import 'package:flutter/material.dart'; 
 
void main() => runApp(MyApp()); 
 
class MyApp extends StatelessWidget { 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      home: Scaffold( 
        appBar: AppBar(    
          title: Text('Mon App Flutter'), 
        ), // AppBar 
        body: Column( 
          children: [ 
            Text('La question '), 
            ElevatedButton(   
              child: Text('Réponse 1'), 
 onPressed: () {}, 
            ), // RaisedButton 
            ElevatedButton ( 
              child: Text('Réponse 2'), 
 onPressed: () {}, 
            ), // RaisedButton 
            ElevatedButton ( 
 child: Text('Réponse 3'),  
              onPressed: () {}, 
 
         ), // ElevatedButton 
          ], 
        ), // Column 
      ), // Scaffold 
    ); // MaterialApp 
  } 
} 
```

Exécutez le code et observez les modifications sur l’interface.

Il n’y a pour le moment aucune interaction lorsque l’on clique sur les boutons. Nous allons maintenant vous 
montrer les trois manières d’exécuter un code lors du déclenchement d’un évènement **onPressed** : 

- La première méthode consiste à faire appel à une fonction de type void. 

- La deuxième méthode utilise une fonction anonyme. 

-  La troisième approche intègre directement un bloc de code. 
 
Adaptez le code comme suit : 
```dart
import 'package:flutter/material.dart'; 
 
void main() => runApp(MyApp()); 
 
class MyApp extends StatelessWidget { 
 
  void answerQuestion() { 
    print('Réponse 1 choisie!'); 
  } 
   
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
   home: Scaffold( 
     appBar: AppBar( 
    title: Text('Mon App Flutter'), 
  ), // AppBar 
  body: Column( 
    children: [ 
      Text('La question '), 
   ElevatedButton ( 
     child: Text('Réponse 1'), 
     onPressed: answerQuestion, 
   ), // ElevatedButton 
   ElevatedButton ( 
     child: Text('Réponse 2'), 
     onPressed: () => print('Réponse 2 choisie!'), 
   ), // ElevatedButton 
   ElevatedButton ( 
     child: Text('Réponse 3'),  
     onPressed: () { 
       print('Réponse 3 choisie!'); 
     }, 
   ), // ElevatedButton 
    ], 
  ), // Column 
   ), // Scaffold 
 ); 
  } 
} 
```


Nous allons maintenant créer nos propres Widget personnalisés qui contiendront les questions (fichier **question.dart**) et les réponses (**answer.dart**) et transformer notre application de `StatelessWidget` en `StatefulWidget`. 
 
Créez un nouveau fichier « **question.dart** » 
 
Dans ce fichier encodez le code suivant : 

```dart
import 'package:flutter/material.dart'; 
 
class Question extends StatelessWidget { 
  final String questionText; 
 
  Question(this.questionText); 
 
  @override 
  Widget build(BuildContext context) { 
    return Container( 
      width: double.infinity,                       // On prend toute la largeur de l’écran 
      margin: EdgeInsets.all(10),              // On définit des marges de 10 pixel ; 
      child: Text(                                         // On ajoute un Widget enfant de type Text 
        questionText,                                 // On affiche le contenu de la variable questionText 
        style: TextStyle(fontSize: 28),    // On applique une police de taille 28 
        textAlign: TextAlign.center,      // On centre le texte 
      ), 
    ); 
  } 
} 

```

Créez un nouveau fichier « **answer.dart** » 
Dans ce fichier encodez le code suivant : 
```dart
import 'package:flutter/material.dart'; 
class Answer extends StatelessWidget { 
  final VoidCallback selectHandler; // Remplacez Function par VoidCallback pour un meilleur typage 
  final String answerText; 
  Answer(this.selectHandler, this.answerText); 
 
  @override 
  Widget build(BuildContext context) { 
    return Container( 
      width: double.infinity, 
      child: ElevatedButton( 
        style: ElevatedButton.styleFrom( 
          backgroundColor : Colors.blue, // Définissez la couleur de fond 
          foregroundColor: Colors.white, // Définissez la couleur du texte 
        ), 
        child: Text(answerText), 
        onPressed: selectHandler, 
      ), 
    ); 
  }
 }
```
Adaptez les code de **main.dart** comme suit :

```dart
import 'package:flutter/material.dart'; 
import './question.dart'; 
import './answer.dart'; 
 
void main() => runApp(MyApp()); 
 
class MyApp extends StatefulWidget { 
  @override 
  State<StatefulWidget> createState() { 
    return _MyAppState(); 
  } 
} 
 
class _MyAppState extends State<MyApp> { 
  final List<Map<String, Object>> questions = const [ // Assurez-vous que le type de answers est Object pour 
pouvoir être List<String> 
    { 
      'questionText': 'What\'s your favorite color?', 
      'answers': ['Black', 'Red', 'Green', 'White'], 
    }, 
    { 
      'questionText': 'What\'s your favorite animal?', 
      'answers': ['Rabbit', 'Snake', 'Elephant', 'Lion'], 
    }, 
    { 
      'questionText': 'Who\'s your favorite instructor?', 
      'answers': ['Max', 'Max', 'Max', 'Max'], 
    }, 
  ]; 
  var _questionIndex = 0; 
 
  void _answerQuestion() { 
    if (_questionIndex < questions.length) { 
      setState(() { 
        _questionIndex = _questionIndex + 1; 
      }); 
      print('We have more questions!'); 
    } else { 
      print('No more questions!'); 
    } 
  } 
 
  @override 
  Widget build(BuildContext context) { 
    return MaterialApp( 
      home: Scaffold( 
        appBar: AppBar( 
          title: Text('My First App'), 
            ), 
        body: _questionIndex < questions.length 
            ? Column( 
          children: [ 
            Question( 
              questions[_questionIndex]['questionText'] as String, // Cast vers String pour s'assurer du type 
            ), 
            ...(questions[_questionIndex]['answers'] as List<String>) // Cast vers List<String> pour s'assurer du type 
                .map((answer) { 
              return Answer(_answerQuestion, answer); 
            }).toList() 
          ], 
        ) 
            : Center( 
          child: Text('You did it!'), 
        ), 
      ), 
    ); 
  } 
} 
```

