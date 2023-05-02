## Custom hooks: 

1. ***useAuth():***  https://codesandbox.io/p/sandbox/useauth-with-context-s7skf6?file=%2Fsrc%2Fhooks%2FuseAuth.tsx <br>  Внутри хука создан *Context* - **AuthContext** . Создана обертка **AuthProvider**. Сам хук просто вызывает **useContext** с **AuthContext**, далее  мы просто оборачиваем наш App в **AuthProvider**, и достаем значения из нашего **AuthContext** в том компоненте в котором это нужно. p.s Похожая схема и для темы приложения или лингвизации. 
---
2. ***Redux:*** https://codesandbox.io/p/sandbox/sweet-voice-8xcm9w?file=%2Fsrc%2Fstore%2Fstore.ts&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A15%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A15%7D%5D <br> Создание custom hooks для redux-toolkit обусловленно необходимостью типизировать хуки которые связывают Redux и React а именно: useDispatch() и useSelector. 
- Определим type нашего стора и функции dispatch в файле store.ts
  - **export type RootState = ReturnType\<typeof store.getState\>** 
  - **export type AppDispatch = typeof store.dispatch**
- В папке hooks файл redux.ts создадим наши хуки и типизируем их: 
  - **export const useAppDispatch = () => useDispatch<AppDispatch>();**
  - **export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;** <br>
 Теперь мы можем использовать хуки для доступа к нашему store без необходимости постоянно типизировать их. 
---
3. ***useOutside*** https://codesandbox.io/s/useoutside-hook-028ewm?file=/src/useOutside.ts <br>
Этот хук позволяет обнаруживать клики за пределами указанного элемента. Мы используем его для закрытия модала при нажатии на любой элемент вне модала. Абстрагировав эту логику в хук, мы можем легко использовать ее во всех наших компонентах, которым нужна подобная функциональность (выпадающие меню, всплывающие подсказки и т.д.).
---
4. ***useControlInput*** https://codesandbox.io/s/usecontrolinput-hook-yehn24?file=/src/useControlInput.ts <br>
Этот хук нужен для быстрого и удобного создания контролируемых инпутов, все что мы делаем в нашем компоненте это вызываем хук 
useControlInput() и присваиваем его константе, к примеру email, phone, name, lastName любой инпут, и после просто разворачиваем диструктуризацией input.bind и input.value соответственно, так же еще и в хук встроен метод reset() который обнулит все! наши инпуты если его сразу диструкторизировать при получении. Ну или можно отдельно для каждого инпута вызывать, тоже не проблема.
<br> Таким образом мы избавляемся от кучи useState() для кадждого поля ввода, и можем использовать хук во всем приложении. 