# Flutter - TP2

Les objectifs de cette premi�re s�ance de travaux pratiques Flutter
sont�:

- `<span style="color:blue">D�couvrir et manipuler la notion les Widgets</span>`

- `<span style="color:blue">Manipuler les styles</span>`

##**Exercice 01�: Scaffold et Appbar**

Cr�ez un nouveau projet Flutter. Nous allons recr�er l'interface
graphique frome scratch. Supprimez le contenu la classe **_MyApp_**
enti�rement

- Nous allons cr�er notre propre classe MyApp�:

```dart
 class MyApp extends StatelessWidget {
  		@override
  		Widget build(BuildContext context) {
 				return MaterialApp();
 		  }
 }
```

Nous aurons une erreur � la compilation, il faut la propri�t� **_home_**
dans **MaterialApp**

Pour voir la liste des arguments possible appuyez sur **_ctrl+espace_**
� l'int�rieur des parenth�ses de MaterialApp()

S�lectionnez l'argument home�:

D�finir **Scaffold()** comme widget pour le home�:

```dart
 return MaterialApp(home: Scaffold(),);
```

Il n y'a plus d'erreur, nous avons une application avec un �cran blanc.
Nous avons �crit un **Statelesswidget** qui construit les deux widgets
les plus importants de Flutter�: **MaterialApp** et **Scaffold**

Le **MaterialApp** permet de contr�ler l'apparence�: couleur, taille de
texte

Le **Scaffold** g�re tout ce qui apparait sur l'�cran

Ajoutez � la m�thode **_MaterialApp_** le param�tre�:

- \_debugShowCheckedModeBanner:

`<span style="color:blue">false</span>`,\_

S�lectionnez la classe **_MyApp_** et reformatez le code en s�lectionnant apr�s un clic droit de la souris **_��Reformat Code dartfmt��_**

Voici le code de votre classe maintenant�:

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

On peut changer la couleur du background�:

```dart
 home: Scaffold(backgroundColor: Colors.green,),
```

- Rajoutez une AppBar en ajoutant le param�tre appBar � l'objet Scaffold appBar:
  `<span style="color:blue">AppBar()</span>`

```dart
 home: Scaffold(
 	backgroundColor: Colors.greenAccent,
 	appBar: AppBar(
 		backgroundColor: Colors.blue,
 		title: Text("hello in my app"),
 		),
 )
```

Ajoutez un titre � l'AppBar avec le param�tre **title** et centrez ce titre, et changez la couleur de l'**AppBar**,

```dart
 backgroundColor: Colors.blue,
 title: Text("hello in my app"),
 centerTitle: true,
```

Ajoutez une ic�ne � l'AppBar

```dart
 actions: [Icon(Icons.account_circle), Icon(Icons.icecream),
 Icon(Icons.access_alarm_sharp),
 Icon(Icons.account_balance_rounded)],
```

Ajoutez un bouton de navigation en bas de la page�: **_bottomNavigationBar_**

```dart
 bottomNavigationBar: BottomNavigationBar(
 items: [BottomNavigationBarItem(icon: Icon(Icons.circle))],
 ),
```

Corrigez les erreurs pour avoir un rendu correct

**Solution�:**

```dart
bottomNavigationBar: BottomNavigationBar(
	items: [
		BottomNavigationBarItem(
				label: ('account'), icon: Icon(Icons.circle)),
		BottomNavigationBarItem(
				label: ('alert'), icon: Icon(Icons.add_alert)),
	],
)
```

Ajoutez une couleur au **_bottomNavigationBar_**

Nous allons maintenant g�rer l'interaction avec les icones de la barre de navigation en bas de page

Ajoutez le param�tre suivant au **_bottomNavigationBar�:_**

```dart
onTap: (indexpushed) {
		print ('Bonjour Flutter Ex1');
		print(indexpushed);
		},
```

Pour g�rer la valeur de l'ic�ne cliqu�e on utilisera une variable
enti�re : index (variable classe)

```dart
 int index = 0�;
```

La variable **currentIndex** de l'objet le **bottomNavigationBar** d�signe l'ic�ne qui est s�lectionn�e

Initialisez cette variable

```dart
currentIndex: index,
```

Pour g�rer la logique de la barre de navigation il faut mettre � jour le currentIndex � chaque fois qu'une ic�ne est cliqu�e, dans la fonction **onTap()**

```dart
index = indexpushed;
```

Pour le que le changement soit dynamique il faut faire appel � la fonction **setState** qui reconstruit l'IHM en fonction des �v�nements. Mais cette fonction n'est disponible que pour les classes **StatefullWidget**. Il faut alors transformer la classe StatelessWidget **MyApp**.

S�lectionnez le nom de la classe **StatelessWidget** et appuyez sur **Alt + entr�e** ensuite **convert to StatefullWidget**

Ajoutez la fonction setState � la fonction **onTap()**

```dart
 setState((){
	 index = indexpushed;
 });
```

On peut �galement changer les couleurs des icones quand elles sont
s�lectionn�es, dans l'objet bottomNavigationBar:

```dart
selectedItemColor: Colors.pink,
unselectedItemColor: Colors.yellow,
```

Vous pouvez supprimer les **print** dans la fonction **onTap()** maintenant

Nous allons maintenant ajouter une image � notre �cran  
Ajouter le param�tre body au **Scaffold**, par exemple

```dart
body: Text('Texte par d�faut'),
```

Visualisez le r�sultat  
Cherchez une image depuis le web, copiez son lien. Remplacez cette ligne par la commande suivant en y mettant votre lien pr�f�r� :-)

```dart
body: Image.network("https://i.insider.com/5de6df0d695b583f4f17f695?width=700 "),
```

Nous allons ensuite mettre en place un widget **column** qui permet de placer plusieurs widgets les uns apr�s les autres.

S�lectionnez **Image.network** puis Alt + entr�e puis **��wrap with
column**��

```dart
 body: Column(
		 children: [
		 Image.network("https://i.insider.com/5de6df0d695b583f4f17f695?width=700"),
		 ],
 ),
```

Ajoutez une ic�ne bouton **_IconButton_** apr�s votre image�:

```dart
IconButton(icon: Icon(Icons.add_box), onPressed: () {print("mon image");}),
```

Nous allons maintenant rajouter un compteur qui s'affiche � l'�cran et qui s'incr�mente � chaque clic sur l'**IconButton**

Ajoutez une variable **number** � votre classe�:

```dart
int number = 0;
```

Il faut maintenant ajouter un champ **Texte** apr�s le **IconButton**

```dart
Text(number.toString()),
```

Il faut maintenant incr�menter la valeur de **number** dans la
fonction **onPressed()** de **IconButton**

```dart
number++;
```

Qu'est-ce que vous remarquez�?

**Cela ne marche pas encore !! d�apr�s vous pourquoi ? **

Question�: Ajoutez un bouton qui d�cr�mente la valeur

On va maintenant s�parer le code en deux fichiers pour plus de lisibilit� :

Cr�ez un nouveau fichier **home_page.dart** (en minuscule)

Ajoutez le premier import

```dart
import 'package:flutter/material.dart';
```

Ajoutez une classe :

```dart
StatefullWidget�: HomePage
```

Pour g�n�rer automatiquement une classe StatefullWidget vous pouvez cr�er une classe StatelessWidget et ensuite la transformer en **Statefullwidget**, comme fait pr�c�demment.

```dart
 class HomePage extends StatefulWidget {
 		@override
 _		HomePageState createState() => _HomePageState();
 }

 class _HomePageState extends State<HomePage> {
 		@override
 		Widget build(BuildContext context) {
 			return MaterialApp();
 		}
 }
```

Cette classe va renvoyer le�: **Scaffold()**

Copiez et retirez le contenu de l'objet **Scaffold(..)** depuis le fichier
**main.dart** et l'ins�rer dans le **Scaffold(..)** de la classe **\_HomePageState()** que vous cr�erez dans **MaterialApp()**.

Copiez aussi les deux variables�: (d�clarations � placer avant le @override de la classe \_HomePageState)

```dart
 int index = 0;
 int number = 0;
```

On se d�place maintenant dans le fichier **main.dart**

Il faut importer le fichier **home_page.dart**

```dart
import 'home_page.dart';
```

Ajoutez � la propri�t� **home**�: la fonction **HomePage()** qui va appeler la classe qui va construire l'IHM

```dart
home : HomePage()
```

Ex�cutez, vous aurez le m�me rendu que l'exercice pr�c�dent mais avec plus de lisibilit� dans le code.

**Exercice 2�: Navigation entre les pages**

Nous allons maintenant impl�menter la logique de navigation entre les pages avec un bouton pour naviguer entre deux pages.

Ajoutez un bouton pour la navigation juste en dessous de la valeur du
compteur�:

```dart
IconButton(icon: Icon(Icons.arrow_right), onPressed: (){})
```

Cr�ez un nouveau fichier pour la nouvelle page. Pour cela cr�ez un nouveau fichier second_page.dart

Ajoutez l'import de Material App

```dart
import 'package:flutter/material.dart';
```

Ajoutez la classes **_SecondPage_** comme �tant un StatelessWidget�:

```dart
 class SecondPage extends StatelessWidget {
		@override
 		Widget build(BuildContext context) {
 		return Scaffold();
		}
 }
```

Ajoutez une AppBar � votre Scaffold

Maintenant il faut d�finir un nom (route) pour cette page. Ajoutez � la classe **_SecondPage_** (avant le @override) le nom de la route qui permettra de pointer vers cette nouvelle page�:

```dart
static const tag = "second_page";
```

Revenant maintenant au fichier main.dart. Ajoutez un import du fichier **second_page.dart**

```dart
import 'second_page.dart';
```

Nous allons ajouter des routes dans le composant **_MaterialApp()_**

Ajoutez l'instruction suivante�apr�s l'instruction : **debugShowCheckedModeBanner**

```dart
routes : {SecondPage.tag : (context) => SecondPage() }
```

Maintenant il faut appeler cette route. Revenez au fichier **home_page.dart**�:

Ajoutez un import du fichier second_page.dart

```dart
import 'second_page.dart';
```

Mettez � jour le **_IconButton_** pour mettre en �uvre la logique de
navigation�:

```dart
 IconButton(
	 icon: Icon(Icons.arrow_right),
	 onPressed: () {
	 Navigator.of(context).pushNamed(SecondPage.tag);
 })
```

**Exercice 3�:** Bombe

R�alisez l'exercice simulant une bombe en partant du projet ��Flutter
Application�� de base

**Exercice 4�:** Une deuxi�me Interface (**avec le body**)

- Cr�ez une nouvelle application Flutter intitul�e ��**MyApp**��. Reportez-vous � la notice d'installation si vous ne savez pas comment cr�er un projet Flutter.

- Le projet contient un r�pertoire���**Lib**�� contenant � ce stade juste
  un fichier ��**main.dart**��.

- Double cliquez sur le fichier ��**main.dart**�� pour l'�diter.

- Remplacez le code du fichier celui de l'encadr� ci-dessous.

```dart
import 'package:flutter/material.dart';
void main() {
runApp(MyApp());
}
// Expression �quivalente
// void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
	return MaterialApp(home: Text('Hello World!'),);
	}
}
```

- Ex�cutez le code en s�lectionnant un �mulateur ou un smartphone et en cliquant ensuite sur le triangle vert

- Observez le r�sultat.

Nous allons maintenant remplacer le texte ��Hello World�� par un Widget
**Scaffold** qui g�re l'espace de la fen�tre dans lequel nous allons
d�finir un Widget **AppBar** qui contiendra le titre de l'application
(Widget **Text**) et un Widget Body qui contiendra un Widget **Text**
qui contiendra le texte par d�faut.

Adaptez le code comme suit�:

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
        body: Text('Texte par d�faut'),
      ), // Scaffold
    ) ; // MaterialApp
  }
}
```

- Ex�cutez le code et observez les changements.

Nous allons maintenant am�liorer le Body de l'application pour y
disposer d'autres objets tels que des boutons (Widget RaisedButton).
Nous allons �galement remplacer le Widget **Text** du body par un Widget invisible de type **Column** qui d�finit une colonne dans le body qui peut accueillir plusieurs Widgets enfants (children). Chaque bouton �
une propri�t� child qui fait r�f�rence � un widget Text qui permet d'�crire sur le bouton et un �v�nement de type onPressed qui pour le moment ne fait r�f�rence � rien (null).

Adaptez le code pr�c�dent comme suit�:

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
              child: Text('R�ponse 1'),
 onPressed: () {},
            ), // RaisedButton
            ElevatedButton (
              child: Text('R�ponse 2'),
 onPressed: () {},
            ), // RaisedButton
            ElevatedButton (
 child: Text('R�ponse 3'),
              onPressed: () {},

         ), // ElevatedButton
          ],
        ), // Column
      ), // Scaffold
    ); // MaterialApp
  }
}
```

- Ex�cutez le code et observez les modifications sur l'interface.

Il n'y a pour le moment aucune interaction lorsque l'on clique sur les
boutons. Nous allons maintenant vous montrer les trois mani�res
d'ex�cuter un code lors du d�clenchement d'un �v�nement **onPressed�**:

- La **`<span style="color:orange">premi�re m�thode</span>`** consiste � faire appel � une fonction de type void.

- La **`<span style="color:green"> deuxi�me m�thode</span>`** utilise une fonction anonyme.

- La **`<span style="color:blue"> troisi�me approche</span>`** int�gre directement un bloc de code.

- M�thode 1�: adaptez le code comme suit�:

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
class MyApp extends StatelessWidget {

  void answerQuestion() {
    print('R�ponse 1 choisie!');
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
     child: Text('R�ponse 1'),
     onPressed: answerQuestion,
   ), // ElevatedButton
   ElevatedButton (
     child: Text('R�ponse 2'),
     onPressed: () => print('R�ponse 2 choisie!'),
   ), // ElevatedButton
   ElevatedButton (
     child: Text('R�ponse 3'),
     onPressed: () {
       print('R�ponse 3 choisie!');
     },
   ), // ElevatedButton
    ],
  ), // Column
   ), // Scaffold
 );
  }
}
```

Nous allons maintenant cr�er nos propres Widget personnalis�s qui contiendront les questions (fichier **question.dart**) et les r�ponses (**answer.dart**) et transformer notre application de **StatelessWidget** en **StatefulWidget**.

- Cr�ez un nouveau fichier ��question.dart��

Dans ce fichier encodez le code suivant�:

```dart
import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  final String questionText;

  Question(this.questionText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,            // On prend toute la largeur de l��cran
      margin: EdgeInsets.all(10),   // On d�finit des marges de 10 pixel ;
      child: Text(                            // On ajoute un Widget enfant de type Text
        questionText,        // On affiche le contenu de la variable questionText
        style: TextStyle(fontSize: 28),    // On applique une police de taille 28
        textAlign: TextAlign.center,      // On centre le texte
      ),
    );
  }
}
```

- Cr�ez un nouveau fichier � answer.dart �

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
          backgroundColor : Colors.blue, // D�finissez la couleur de fond
          foregroundColor: Colors.white, // D�finissez la couleur du texte
        ),
        child: Text(answerText),
        onPressed: selectHandler,
      ),
    );
  }
  }
```

Adaptez les code de main.dart comme suit :

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
pouvoir �tre List<String>
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
