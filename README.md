## Custom hooks: 

1. <span style="color:red">useAuth():</span> https://codesandbox.io/p/sandbox/useauth-with-context-s7skf6?file=%2Fsrc%2Fhooks%2FuseAuth.tsx <br>  Внутри хука создан *Context* - **AuthContext** . Создана обертка **AuthProvider**. Сам хук просто вызывает **useContext** с **AuthContext**, далее  мы просто оборачиваем наш App в **AuthProvider**, и достаем значения из нашего **AuthContext** в том компоненте в котором это нужно. p.s Похожая схема и для темы приложения или лингвизации. 
---
2. ***Redux:*** Создание custom hooks для redux-toolkit обусловленно необходимостью типизировать хуки которые связывают Redux и React а именно: useDispatch() и useSelector. 
- Определим type нашего стора и функции dispatch в файле store.ts
  - **export type RootState = ReturnType\<typeof store.getState\>** 
  - **export type AppDispatch = typeof store.dispatch**
- В папке hooks файл redux.ts создадим наши хуки и типизируем их: 
  - **export const useAppDispatch = () => useDispatch<AppDispatch>();**
  - **export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;** <br>
 Теперь мы можем использовать хуки для доступа к нашему store без необходимости постоянно типизировать их. 
