
Задание 1
Создайте приложение для отслеживания новинок кинофильмов, которые вы хотите посмотреть. Записи можно добавить, отредактировать или удалить.

 При вводе нового элемента в верхнее поле и нажатию Add, элемент добавляется в список ниже. При этом этот элемент выглядит в виде поля для ввода текста, которое можно редактировать. При нажатии на "Удалить", элемент должен удаляться. Редактирование элемента должно работать с помощью two-way binding (см. прошлые лекции).

Указания:

Реализовать "умное" обновление, при котором не должны обновляться компоненты "соседних" элементов с тем, который в данный момент редактируется. Это реализуется с помощью shouldComponentUpdate. Можете завести дополнительный id для каждого элемента (напр. дата в unixtime-миллисекундах или + микросекундах).