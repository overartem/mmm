# Readme

При верстанні був використанний підхід **Mobile-first.**

Додав затримку в **300мс** також після того коли кнопка підсвітилась зеленим(правильна відповідь) а бо красним false інакше, якщо робити по вашим вимогам, додавати 2с тільки для обчислення на кроці true чи false, то  кнопку в статусі correct (зелену або красну) видно не буде бо одразу буде виведене наступне питання чи фінальна сторінка для false.

------------


Додав використання **redux-react** хоча можно було обійтися в цьому завданні і без нього але так як ви просили передбачити розширення цього додатку тому був використанний redux.

------------


Додав ресет додатку якщо юзер з фінальної сторінки повертається назад на початок гри через кнопку try again чи через навігацію браузера.

------------


Додана **404** сторінка.

------------

Додано невелику анімацію на final page якщо ви виграли 0. :)

------------

Додав блокування інших кнопок коли клікнута кнопка відповіді в статусі error або correct, щоб юзер не зміг змінити уже прийнятий вибір, якщо вдруг в майбутньому зазор по часу між змінами стану буде більше це буде більш помітно і профітно.

------------


Аніміція і зміна стану сайдбару для мобілок і таблету (портретного) спеціально зроблена тільки через цсс без використання реакту, це як невелика оптимізація, щоб не викликати зайвий ререндер.

------------


У вас трохи різниця в дизайні між мобілкою і десктопом, в кольорі кнопок, що виглядає дивно коли різниця в кнопках  між девайсами, я залишив більш правильний варіант коли кольори кнопок всюди однакові це не буде вводити юзера в оману..

------------


Не дуже зрозумів зміну кольорів бордера ітемів в сайдбарі, це не описано в вашій документайції  але помітив це запізно в дизайні, тому якщо логіку кольорів додав не ту  дайте знати я поправлю.

------------


Я застосував 3 стана для ітемів в сайдбарі:
- Дефолтний темно-сірий
- Віграний останній ітем бордер синій, при ховері бекграунд стає синім
- Виграні ітеми нижче останнього світло-сірі

## Available Scripts

In the project directory, you can run:

### `npm start`
or
### `npm run build`
