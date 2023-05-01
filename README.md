## Custom hooks: 

1. ***useAuth():*** Внутри хука создан *Context* - **AuthContext** . Создана обертка **AuthProvider**. Сам хук просто вызывает **useContext** с **AuthContext**, далее  мы просто оборачиваем наш App в **AuthProvider**, и достаем значения из нашего **AuthContext** в том компоненте в котором это нужно. p.s Похожая схема и для темы приложения или лингвизации. 