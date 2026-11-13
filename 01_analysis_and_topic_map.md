# 01_analysis_and_topic_map.md — Анализ учебных программ и карта тем

Назначение: обосновать состав и порядок тем интерактивного учебника по PostgreSQL
(аудитория и правила — см. `00_rules.md`). Все утверждения о поведении PostgreSQL
привязаны к документации `/docs/17/` и исходному коду на базовом коммите
`083ac033419f690758508e08c1736089384bbee8` (PostgreSQL 17.11, тег `REL_17_11`).
Дата верификации всех ссылок: 2026-11-12 (HTTP-коды и grep-проверки, см. раздел 5).

## 1. Источники: существующие курсы и их оглавления

### 1.1. Сводная таблица источников

| ID | Источник | Тип | Где проверено (2026-11-12) |
|----|----------|-----|------------------------------|
| S1 | Официальная документация PostgreSQL 17.11 | Официальный учебник и справочник | <https://www.postgresql.org/docs/17/> — HTTP 200, титул «PostgreSQL 17.11 Documentation» |
| S2 | Е. П. Моргунов. «PostgreSQL. Основы языка SQL» (Postgres Professional, БХВ, 2018; PDF свободно) | Учебное пособие, русский язык | <https://edu.postgrespro.ru/sql_primer.pdf> — скачан, оглавление извлечено из PDF |
| S3 | Е. В. Рогов и др. «PostgreSQL 18 изнутри» (Postgres Professional; свободно) | Учебник по внутреннему устройству | <https://postgrespro.ru/education/books/internals> — оглавление извлечено со страницы |
| S4 | «PostgreSQL 18. Оптимизация запросов» (Postgres Professional; свободно) | Учебник по оптимизации запросов | <https://postgrespro.ru/education/books/qptbook> — оглавление извлечено со страницы |
| S5 | A. Silberschatz, H. Korth, S. Sudarshan. «Database System Concepts», 7th ed. | Академический учебник по теории БД | <https://db-book.com/toc-dir/toc.pdf> — глобальное оглавление (PDF, 8 с.) |
| S6 | CMU 15-445/645 «Intro to Database Systems», Spring 2025 | Академический видеолекционный курс | <https://15445.courses.cs.cmu.edu/spring2025/schedule.html> — HTTP 200, расписание извлечено |

### 1.2. S1 — документация PostgreSQL 17.11: релевантные оглавления

Полное оглавление проверено на `/docs/17/`. Для учебника значимы:

- **Часть I. Tutorial (гл. 1–3):** Getting Started; The SQL Language (концепции, запросы, соединения, агрегаты, обновления, представления, FK); Advanced Features (схемы, оконные функции, транзакции, наследование).
- **Часть II. The SQL Language (гл. 4–15):** SQL Syntax (лексическая структура, соглашения об именах); Data Definition (типы столбцов, ограничения, схемы, партиционирование); Data Manipulation; Queries (JOIN, GROUP BY, подзапросы, WITH, LIMIT, сортировка); Data Types (все встроенные типы, массивы, JSON, TOAST-упоминания); Functions and Operators; Type Conversion; Indexes (все методы, составные/частичные/выражения, index-only scan, проверка использования); Full Text Search; Concurrency Control (изоляция, блокировки, caveats); Performance Tips (EXPLAIN, статистика планировщика); Parallel Query.
- **Часть V. Server Programming (гл. 37–49):** Extending SQL; Triggers; Rule System; Procedural Languages; PL/pgSQL (гл. 43); SPI и далее.
- **Часть VII. Internals (гл. 50–69):** Overview of PostgreSQL Internals (путь запроса, процессы); System Catalogs; System Views; Frontend/Backend Protocol; Database Physical Storage (страницы, layout кортежей, TOAST); Transaction Processing (состояния транзакций, xmin/xmax); How the Planner Uses Statistics.

### 1.3. S2 — Моргунов, «PostgreSQL. Основы языка SQL»: оглавление

1. Введение в базы данных и SQL (что такое БД, реляционная модель, язык SQL).
2. Создание рабочей среды (установка, psql, развёртывание учебной БД).
3. Основные операции с таблицами (обзор SQL).
4. Типы данных СУБД PostgreSQL (числовые, строковые, дата/время, логический, массивы, JSON).
5. Основы языка определения данных (значения по умолчанию, ограничения целостности, создание/удаление таблиц, модификация, представления, схемы).
6. Запросы (SELECT, соединения, агрегирование и группировка, подзапросы).
7. Изменение данных.
8. Индексы.
9. Транзакции.
10. Повышение производительности.

### 1.4. S3 — «PostgreSQL 18 изнутри»: оглавление

- Введение.
- **Часть I. Изоляция и многоверсионность:** Изоляция; Страницы и версии строк; Снимки данных; Самоочистка и hot-обновления; Очистка и заморозка; Автоочистка; Перестроение таблиц и индексов.
- **Часть II. Буферный кеш и журнал:** Буферный кеш; Журнал предзаписи; Режимы журнала.
- **Часть III. Блокировки:** Блокировки отношений; строк; разных объектов; в памяти.
- **Часть IV. Выполнение запросов:** Этапы выполнения запросов; Статистика; Табличные методы доступа; Индексные методы доступа; Индексное сканирование; Вложенный цикл; Хеширование; Сортировка и слияние.
- **Часть V. Типы индексов:** Хеш-индекс; B-дерево; GiST; SP-GiST; GIN; BRIN.

### 1.5. S4 — «PostgreSQL 18. Оптимизация запросов»: оглавление

Демонстрационная база данных; Планирование и выполнение; Методы доступа; Сортировка и группировка; Способы соединения; Статистика; Профилирование; Материализация и функции; Подходы к настройке.

### 1.6. S5 — Silberschatz, «Database System Concepts», 7th ed.: оглавление (части)

- **Part 1. Relational Languages:** Introduction; Introduction to the Relational Model; Introduction to SQL; Intermediate SQL (join, views, transactions, constraints, types, schemas, authorization); Advanced SQL (доступ из языков программирования, функции и процедуры, триггеры, рекурсивные запросы, OLAP).
- **Part 2. Database Design:** E-R-модель; Relational Database Design (нормальные формы, функциональные зависимости).
- **Part 5. Storage Management:** Physical Storage Systems; Data Storage Structures; Indexing (B+-деревья, хеш-индексы).
- **Part 6. Query Processing and Optimization:** Query Processing; Query Optimization.
- **Part 7. Transaction Management:** Transactions (ACID); Concurrency Control (2PL, timestamp ordering, MVCC); Recovery System.

### 1.7. S6 — CMU 15-445 (Spring 2025): список лекций

#01 Relational Model & Algebra; #02 Modern SQL; #03 Database Storage I; #04 Memory Management; #05 Database Storage II; #06 Storage Models & Compression; #07 Hash Tables; #08–09 Indexes & Filters; #10 Index Concurrency Control; #11 Sorting & Aggregations; #12 Joins Algorithms; #13–14 Query Execution; #15 Query Planning & Optimization; #16 Concurrency Control Theory; #17 Two-Phase Locking; #18 Timestamp Ordering; #19 MVCC; #20 Database Logging; #21 Database Recovery; #22–24 Distributed Databases; #25 Final Review.

### 1.8. Отклонённые источники (и почему не использованы)

| Кандидат | Причина отклонения (проверка 2026-11-12) |
|----------|-------------------------------------------|
| PGExercises (pgexercises.com) | Сеть недоступна из среды подготовки (curl timeout, код 000); оглавление верифицировать не удалось |
| postgresqltutorial.com | Циклический HTTP 301 без выдачи контента; TOC не верифицирован |
| D. Fontaine, «The Art of PostgreSQL» (theartofpostgresql.com) | Сайт доступен (HTTP 200), но оглавление книги не публикуется: только треки Core/Advanced/Architect без состава глав — сопоставлять не с чем |
| AWS workshop-материалы | Поиск по GitHub org `aws-samples` (API) по «postgresql workshop» вернул только прикладные DevOps/AI-примеры, где PostgreSQL — компонент приложения, а не предмет обучения; структурированного курса по PostgreSQL для разработчиков не найдено |
| К. Дж. Дейт, «Введение в системы баз данных» | Классический академический ориентир; верифицируемого онлайн-оглавления не найдено, поэтому в сопоставлении (раздел 2) не участвует. Рекомендуется как дополнительная литература к теоретическим вставкам по реляционной модели |

### 1.9. Методологические оговорки

1. Книги S3 и S4 — издания по PostgreSQL 18. В настоящем анализе они используются
   **только как учебные программы** (какие темы и в каком порядке принято изучать).
   Все факты для текста учебника будут браться из `/docs/17/` и кода на базовом
   коммите 17.11. На странице S3 доступен PDF издания и для 17-й ветки:
   <https://edu.postgrespro.ru/postgresql_internals-17.pdf> (состав глав
   17-го издания отдельно не перепроверялся — при работе над главами учебника
   сверяться с ним).
2. S5 и S6 — источники по теории БД вообще, не по PostgreSQL: они задают каркас
   теоретических вставок (правило 7 из `00_rules.md`) и подтверждают место тем
   (изоляция, индексы, обработка запросов) в академическом каноне.
3. Ниже в разделах 2–4 темы считаются «подтверждёнными», если покрыты хотя бы
   одним источником из S1–S6. Для PostgreSQL-специфичных утверждений опорный
   источник — S1 (документация) и код.

## 2. Сопоставление тем

### 2.1. Ядро — темы, повторяющиеся у большинства источников

Колонки: S1 документация / S2 Моргунов / S3 «Изнутри» / S4 «Оптимизация» / S5 Silberschatz / S6 CMU. «+» — тема представлена отдельным разделом; «~» — затрагивается частично.

| Тема | S1 | S2 | S3 | S4 | S5 | S6 | Итог |
|------|----|----|----|----|----|----|------|
| Реляционная модель, таблицы, ключи | + | + | ~ | | + | + | ядро (5) |
| SELECT, WHERE, NULL | + | + | | ~ | + | + | ядро (5) |
| Соединения JOIN | + | + | ~ | + | + | + | ядро (6) |
| Агрегация, GROUP BY/HAVING | + | + | | + | + | + | ядро (6) |
| Подзапросы, CTE, оконные функции | + | + | | + | + | ~ | ядро (5) |
| Типы данных (числа, текст, даты) | + | + | | | ~ | | ядро (3) |
| DDL: таблицы, ограничения, PK/FK | + | + | | | + | | ядро (3) |
| DML: INSERT/UPDATE/DELETE | + | + | | | + | | ядро (3) |
| Транзакции, ACID | + | + | + | | + | + | ядро (5) |
| Уровни изоляции | + | + | + | | + | + | ядро (5) |
| MVCC, версии строк | + | | + | | ~ | + | ядро (4) |
| Блокировки | + | | + | | + | + | ядро (4) |
| Индексы (вообще) и B-tree | + | + | + | + | + | + | ядро (6) |
| EXPLAIN и чтение планов | + | + | + | + | | + | ядро (5) |
| Планировщик, статистика | + | ~ | + | + | + | + | ядро (6) |
| Алгоритмы соединений в исполнителе | ~ | | + | + | + | + | ядро (5) |
| Представления | + | + | | | + | | ядро (3) |
| Функции/процедуры, PL/pgSQL, триггеры | + | | | | + | | ядро (2) |
| Роли и привилегии | + | | | | + | | ядро (2) |
| Архитектура процессов, буферный кеш | + | | + | | | + | ядро (3) |
| Формат хранения (страницы, кортежи) | + | | + | | + | + | ядро (4) |

Вывод: канон учебной программы для разработчика устойчив: **SQL-запросы → типы →
DDL/проектирование → DML → транзакции/изоляция → MVCC → индексы → планировщик/EXPLAIN**
с контекстом архитектуры сервера. Порядок совпадает с S1 (части I–II) и S2.

### 2.2. Темы одного источника или за пределами ядра

| Тема | Кто покрывает | Решение для учебника |
|------|---------------|----------------------|
| Нормализация (1НФ–3НФ), ER-проектирование | только S5 (академический канон) | Включить как **обязательную (J)** теоретическую вставку: без неё непонятно, зачем ключи и связи. Один источник допустим, т.к. это классика теории БД, а не спорное утверждение о PostgreSQL |
| Схемы и `search_path` | S1, S2 | J+ (полезно, два источника) |
| Массивы, JSON/JSONB | S1, S2 | J+ (два источника) |
| Партиционирование | только S1 (`ddl-partitioning.html`) | J+ со статусом «только документация»: тема важна разработчику, но в остальных программах отсутствует |
| Full Text Search | только S1 (гл. 12) | **Не входит**: объёмная самостоятельная тема, покрываемая одним источником; в учебнике — справочная пометка |
| Параллельные запросы | только S1 (гл. 15) | Не отдельная тема: справочная пометка при разборе EXPLAIN (узел Gather), ссылка на `parallel-query.html` |
| Наследование таблиц (`INHERITS`) | только S1 (`tutorial-inheritance.html`) | **Не включать**: единственный источник, остальные программы тему игнорируют; декларативное партиционирование закрывает практические потребности |
| Системный каталог, `information_schema` | S1 (гл. 35, 51, 52) | J+ (важно разработчику, но один источник) |
| Row-Level Security | только S1 | J+ со статусом «только документация» |
| Табличные/индексные методы доступа как API расширений | S1 (гл. 61–62), S3 (Ч. IV) | middle+ (справочная пометка): API для авторов расширений |
| WAL и режимы журнала | S1 (`wal.html`), S3 (Ч. II), S5, S6 (#20–21) | middle+ (справочная пометка о существовании); глубина — эксплуатация/надёжность |
| Перестроение таблиц и индексов, автоочистка в деталях, заморозка | S1 (`maintenance.html`), S3 (Ч. I) | Эксплуатация: справочная пометка; разработчику достаточно концепции «VACUUM удаляет мёртвые версии» |
| Репликация, кластеризация, шардирование | S1 (ч. III), S5/S6 (distributed) | middle+, в учебник не входит (правило 1 `00_rules.md`) |
| Бэкапы, мониторинг, тонкая настройка GUC | S1 (ч. III) | middle+, в учебник не входит (правило 1 `00_rules.md`) |

### 2.3. Пометки «стандарт SQL vs расширение PostgreSQL»

Соглашения, которые учебник обязан маркировать (правило: «соглашение, а не требование стандарта»):

- `SERIAL` — расширение PostgreSQL; стандартный аналог — `GENERATED ... AS IDENTITY` (S1: `datatype-numeric.html`, `sql-createtable.html`).
- `RETURNING` у `INSERT/UPDATE/DELETE` — расширение PostgreSQL (S1: `dml.html`).
- `INSERT ... ON CONFLICT` — расширение; стандартная альтернатива — `MERGE` (S1: `sql-insert.html`).
- `LIMIT/OFFSET` — расширение; стандарт — `FETCH FIRST n ROWS ONLY` (S1: `queries-limit.html`).
- `DISTINCT ON`, `ILIKE`, оператор `::` приведения типов — расширения PostgreSQL (S1: `queries.html`, `functions.html`, `typeconv.html`).
- Массивы и `jsonb` — расширения PostgreSQL; `json` соответствует SQL:2016 (S1: `datatype.html`).
- `information_schema` — стандарт SQL; `pg_catalog` — расширение PostgreSQL (S1: `information-schema.html`, `catalogs.html`).
- `READ COMMITTED` как уровень по умолчанию — соглашение реализации (стандарт SQL не фиксирует уровень по умолчанию); `REPEATABLE READ` в PostgreSQL реализован как изоляция снимков и **не допускает фантомов** — стандарт это допускает, потому что требует лишь минимума гарантий (S1: `transaction-iso.html`, дословно: «PostgreSQL's Repeatable Read implementation does not allow phantom reads. This is acceptable under the SQL standard because the standard specifies only the minimal behaviors...» — формулировка проверена на `/docs/17/transaction-iso.html` 2026-11-12).
- Вывод `EXPLAIN` — формат, специфичный для реализации PostgreSQL (S1: `sql-explain.html`).

### 2.4. Расхождение версий, обнаруженное при верификации

Код «ленивой» очистки heap-таблиц в базовом коммите 17.11 находится в файле
`src/backend/access/heap/vacuumlazy.c` (функции `heap_vacuum_rel`, `lazy_scan_heap` —
проверено grep-ом по raw на SHA). Путь `src/backend/access/heap/vacuum.c` на базовом
коммите **не существует** (HTTP 404 при проверке 2026-11-12). Правило для глав учебника:
имя файла проверять на базовом коммите; при упоминании переименований между ветками
обязательно указывать версию. Где именно произошло переименование — предмет отдельной
проверки по истории git; в учебнике не утверждать без проверки.

## 3. Карта тем: ориентированный ациклический граф

### 3.1. Нотация

- Узел `Tnn` — тема. Уровень: **[J]** — junior (обязательно), **[J+]** — junior+ (желательно).
- Ребро «T_requires» задаётся списком «требует»: изучение темы невозможно без
  предварительного понимания перечисленных тем.
- Ацикличность: все рёбра направлены от меньших номеров к большим (проверено по
  построению), следовательно циклов нет.
- Для тем внутреннего устройства в колонке «Опора» — файл кода на базовом коммите
  (шаблон: `https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/<путь>`)
  и страница документации (`https://www.postgresql.org/docs/17/<слаг>.html`). Полные
  URL — в разделе 5.

### 3.2. Слои и рёбра

**Слой A. Введение**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T01 | Что такое БД/СУБД; реляционная модель: отношение, кортеж, домен, ключи (теор. вставка) | J | — |
| T02 | Кластер/база/роль; psql и подключение (описание, без выполнения) | J | T01 |
| T03 | Системный каталог `pg_catalog` и `information_schema`; метакоманды psql | J+ | T02 |

**Слой B. Запросы SELECT**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T04 | Проекция и WHERE; NULL и трёхзначная логика | J | T02 |
| T05 | ORDER BY, LIMIT/OFFSET, DISTINCT | J | T04 |
| T06 | Соединения: INNER/LEFT/RIGHT/FULL/CROSS, ON/USING | J | T04 |
| T07 | Агрегатные функции, GROUP BY, HAVING | J | T04 |
| T08 | Подзапросы: скалярные, IN, EXISTS, ANY/ALL | J | T04 |
| T09 | CTE (WITH), нематериализованные/материализованные | J | T08 |
| T10 | Рекурсивные CTE | J+ | T09 |
| T11 | Оконные функции | J+ | T07 |

**Слой C. Типы данных**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T12 | Числовые (int, numeric, serial-семейство) и символьные типы | J | T04 |
| T13 | Дата/время: date, timestamp/timestamptz, interval, часовые пояса | J | T12 |
| T14 | boolean, uuid, enum | J | T12 |
| T15 | Массивы | J+ | T12 |
| T16 | JSON/JSONB | J+ | T12 |
| T17 | Приведение типов, правила разрешения (typeconv) | J | T12 |

**Слой D. DDL и проектирование**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T18 | CREATE TABLE, DEFAULT, идентификаторы и кавычки | J | T12 |
| T19 | Ограничения: NOT NULL, UNIQUE, PK, FK, CHECK | J | T18 |
| T20 | Связи 1:1/1:N/M:N; нормализация 1НФ–3НФ (теор. вставка) | J | T19 |
| T21 | ALTER TABLE; представления; материализованные представления | J | T18 |
| T22 | Схемы и search_path | J+ | T21 |
| T23 | Последовательности; SERIAL vs GENERATED AS IDENTITY | J | T18 |
| T24 | Декларативное партиционирование | J+ | T19 |

**Слой E. Изменение данных**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T25 | INSERT; ON CONFLICT (upsert) | J | T18 |
| T26 | UPDATE, DELETE, RETURNING | J | T25 |

**Слой F. Транзакции, MVCC, конкурентность**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T27 | ACID; BEGIN/COMMIT/ROLLBACK | J | T25 |
| T28 | Savepoints; ошибки и откат транзакции | J+ | T27 |
| T29 | Уровни изоляции; аномалии (грязное/неповторяемое/фантомное чтение) | J | T27 |
| T30 | MVCC: версии строк (xmin/xmax), снимки, видимость | J | T29 |
| T31 | SERIALIZABLE и SSI (концептуально) | J+ | T29 |
| T32 | Блокировки таблиц и строк, очереди ожидания, взаимоблокировки | J | T27, T30 |
| T33 | VACUUM: зачем и что чистит; автоочистка (справочно) | J | T30 |

**Слой G. Хранение (внутреннее устройство, концептуально)**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T34 | Архитектура процессов и памяти (обзор) | J+ | T02 |
| T35 | Страницы данных и формат кортежей | J+ | T34 |
| T36 | TOAST: хранение больших значений | J+ | T35 |

**Слой H. Индексы**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T37 | B-tree: устройство, поиск, уникальные индексы | J | T19 |
| T38 | Составные, частичные, индексы на выражениях, INCLUDE | J+ | T37 |
| T39 | Index-only scan и карта видимости | J+ | T37, T30 |
| T40 | Обзор прочих методов: hash, GIN, GiST, SP-GiST, BRIN | J+ | T37 |

**Слой I. Выполнение запросов, планировщик, EXPLAIN**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T41 | Этапы обработки запроса: парсер → переписывание → планировщик → исполнитель | J | T21 |
| T42 | Статистика (ANALYZE, pg_statistic), оценки селективности | J+ | T41 |
| T43 | EXPLAIN: стоимость, строки, узлы; EXPLAIN ANALYZE | J | T41, T37 |
| T44 | Методы доступа и соединения в планах: Seq/Index/Bitmap Scan, Nested Loop, Hash Join, Merge Join | J | T43 |
| T45 | Сортировка и агрегация в планах; параметры стоимости (справочно) | J+ | T44, T07 |

**Слой J. Серверное программирование**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T46 | Функции на SQL | J | T08 |
| T47 | PL/pgSQL: переменные, управление, RETURN | J+ | T46 |
| T48 | Триггеры | J+ | T47, T26 |
| T49 | Процедуры и CALL; управление транзакциями внутри | J+ | T47, T27 |

**Слой K. Безопасность**

| ID | Тема | Ур. | Требует |
|----|------|-----|---------|
| T50 | Роли, GRANT/REVOKE, владение объектами | J | T18, T22 |
| T51 | Row-Level Security | J+ | T50 |

### 3.3. Примечания к узлам: факты и опорные источники

Формат: тезис → где подтверждено. Функции перечислены только те, существование которых
проверено grep-ом по raw-файлу на базовом коммите (полный список проверок — раздел 5.3).
Якоря на строки приведены только там, где строки проверены лично на этом коммите.

**T30 MVCC.**
- Версии строк: каждая строка heap-таблицы — кортеж с заголовком `HeapTupleHeader`;
  структура `HeapTupleHeaderData` объявлена в
  [src/include/access/htup_details.h](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/access/htup_details.h)
  и содержит поля `t_xmin`/`t_xmax` — идентификаторы транзакций, вставившей и удалившей версию (проверено grep-ом).
- Идентификатор транзакции — `TransactionId`, 32-битное беззнаковое целое:
  [src/include/c.h, строка 669](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/c.h#L669)
  (`typedef uint32 TransactionId;` — строка проверена). 64-битная обёртка
  `FullTransactionId` (эпоха в старших 32 битах) —
  [src/include/access/transam.h, строки 47–48](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/access/transam.h#L47-L48).
- Новые версии создаются в
  [src/backend/access/heap/heapam.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/heap/heapam.c)
  (функции `heap_insert`, `heap_update`, `heap_delete`).
- Снимок — структура `SnapshotData`:
  [src/include/utils/snapshot.h](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/utils/snapshot.h);
  текущий снимок выдаёт `GetTransactionSnapshot`:
  [src/backend/utils/time/snapmgr.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/utils/time/snapmgr.c);
  сам снимок строится по массиву активных процессов `GetSnapshotData`:
  [src/backend/storage/ipc/procarray.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/ipc/procarray.c);
  новые XID выдаёт `GetNewTransactionId`:
  [src/backend/access/transam/varsup.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/transam/varsup.c).
- Документация: [Introduction to Concurrency Control](https://www.postgresql.org/docs/17/mvcc-intro.html),
  [Transaction Isolation](https://www.postgresql.org/docs/17/transaction-iso.html),
  глава 66 [Transaction Processing](https://www.postgresql.org/docs/17/transactions.html).

**T29 Уровни изоляции.**
- PostgreSQL реализует Read Committed (по умолчанию) и Repeatable Read (изоляция снимков,
  фантомов не допускает — см. раздел 2.3), Serializable (SSI):
  [Transaction Isolation](https://www.postgresql.org/docs/17/transaction-iso.html).
- Машина транзакций (старт/фиксация на уровне бэкенда): функции `StartTransactionCommand`,
  `CommitTransactionCommand` в
  [src/backend/access/transam/xact.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/transam/xact.c).

**T31 Serializable/SSI.** Предикатные блокировки сериализуемой изоляции —
[src/backend/storage/lmgr/predicate.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/lmgr/predicate.c)
(описание подхода — комментарии в начале файла и
[Transaction Isolation](https://www.postgresql.org/docs/17/transaction-iso.html)).

**T32 Блокировки.** Тяжёлые (таблицы) блокировки выдаются `LockAcquire` в
[src/backend/storage/lmgr/lock.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/lmgr/lock.c);
ожидание блокировки строки транзакции — `XactLockTableWait` в
[src/backend/storage/lmgr/lmgr.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/lmgr/lmgr.c).
Документация: [Explicit Locking](https://www.postgresql.org/docs/17/explicit-locking.html),
[Locking and Indexes](https://www.postgresql.org/docs/17/locking-indexes.html).

**T33 VACUUM.** Мёртвые версии строк удаляет VACUUM; для heap-таблиц реализация —
`heap_vacuum_rel` и `lazy_scan_heap` в
[src/backend/access/heap/vacuumlazy.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/heap/vacuumlazy.c)
(в 17.11 файл так называется; см. раздел 2.4), диспетчер команды — `vacuum` в
[src/backend/commands/vacuum.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/commands/vacuum.c).
Документация: [VACUUM](https://www.postgresql.org/docs/17/sql-vacuum.html),
[Routine Database Maintenance Tasks](https://www.postgresql.org/docs/17/maintenance.html).

**T34 Архитектура.** Postmaster принимает соединения и порождает серверный процесс
на каждое:
[src/backend/postmaster/postmaster.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/postmaster/postmaster.c);
обзор — [Overview of PostgreSQL Internals](https://www.postgresql.org/docs/17/overview.html).

**T35 Страницы.** Страницы данных — блоки фиксированного размера (обычно 8 КБ,
другой размер выбирается при сборке —
[Database Page Layout](https://www.postgresql.org/docs/17/storage-page-layout.html)).
Заголовок страницы — структура `PageHeaderData` в
[src/include/storage/bufpage.h](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/storage/bufpage.h).
Общая глава: [Database Physical Storage](https://www.postgresql.org/docs/17/storage.html).
Работа с буферами (кеш страниц) — `ReadBufferExtended` в
[src/backend/storage/buffer/bufmgr.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/buffer/bufmgr.c)
и [README буферного менеджера](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/storage/buffer/README).

**T36 TOAST.** Слишком большие значения выносятся из строки в служебную toast-таблицу;
функция сохранения — `toast_save_datum` в
[src/backend/access/common/toast_internals.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/common/toast_internals.c).
Документация: [TOAST](https://www.postgresql.org/docs/17/storage-toast.html).

**T37–T40 Индексы.**
- B-tree: устройство и инварианты —
  [README модуля nbtree](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/nbtree/README);
  документация: [Indexes](https://www.postgresql.org/docs/17/indexes.html),
  [Index Types](https://www.postgresql.org/docs/17/indexes-types.html),
  составные — [Multicolumn Indexes](https://www.postgresql.org/docs/17/indexes-ordering.html),
  частичные — [Partial Indexes](https://www.postgresql.org/docs/17/indexes-partial.html),
  на выражениях — [Indexes on Expressions](https://www.postgresql.org/docs/17/indexes-expressional.html).
- Index-only scan:
  [src/backend/executor/nodeIndexonlyscan.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeIndexonlyscan.c),
  [Index-Only Scans](https://www.postgresql.org/docs/17/indexes-index-only-scans.html).
- Прочие методы: README-файлы модулей
  [hash](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/hash/README),
  [gist](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/gist/README),
  [gin](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/gin/README),
  [spgist](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/spgist/README),
  [brin](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/access/brin/README).
- Проверка использования индексов: [Examining Index Usage](https://www.postgresql.org/docs/17/indexes-examine.html).

**T41 Этапы запроса.** Обработка простого запроса оркестрируется `exec_simple_query`:
[src/backend/tcop/postgres.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/tcop/postgres.c).
Грамматика —
[src/backend/parser/gram.y](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/parser/gram.y);
семантический анализ — `transformStmt`:
[src/backend/parser/analyze.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/parser/analyze.c);
планирование — `subquery_planner`, `standard_planner`:
[src/backend/optimizer/plan/planner.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/optimizer/plan/planner.c),
обзор планировщика —
[README каталога optimizer](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/optimizer/README).
Документация: [Overview of PostgreSQL Internals](https://www.postgresql.org/docs/17/overview.html).

**T42 Статистика.** Сбор — `do_analyze_rel`:
[src/backend/commands/analyze.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/commands/analyze.c);
оценки селективности (пример — `eqsel`):
[src/backend/utils/adt/selfuncs.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/utils/adt/selfuncs.c);
каталог статистики —
[src/include/catalog/pg_statistic.h](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/include/catalog/pg_statistic.h).
Документация: [ANALYZE](https://www.postgresql.org/docs/17/sql-analyze.html),
[How the Planner Uses Statistics](https://www.postgresql.org/docs/17/planner-stats-details.html).

**T43 EXPLAIN.** Формирование плана для вывода — `ExplainOnePlan`:
[src/backend/commands/explain.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/commands/explain.c).
Документация: [EXPLAIN](https://www.postgresql.org/docs/17/sql-explain.html),
[Using EXPLAIN](https://www.postgresql.org/docs/17/performance-tips.html).
Справочная пометка: узел Gather означает параллельный запрос — подробно вне учебника,
см. [Parallel Query](https://www.postgresql.org/docs/17/parallel-query.html).

**T44 Методы исполнения.** Seq Scan — `ExecSeqScan`:
[src/backend/executor/nodeSeqscan.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeSeqscan.c);
Nested Loop — `ExecNestLoop`:
[src/backend/executor/nodeNestloop.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeNestloop.c)
(в 17.11 имя файла именно с маленькой «l» — проверено);
Hash Join — `ExecHashJoin`:
[src/backend/executor/nodeHashjoin.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeHashjoin.c);
Merge Join — `ExecMergeJoin`:
[src/backend/executor/nodeMergejoin.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeMergejoin.c).

**T45 Сортировка/агрегация.** Сортировка:
[src/backend/utils/sort/tuplesort.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/utils/sort/tuplesort.c);
агрегация:
[src/backend/executor/nodeAgg.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/executor/nodeAgg.c).
Параметры стоимости планировщика (существование — знать; настройка сервера — middle+):
[Server Configuration](https://www.postgresql.org/docs/17/runtime-config.html).

**T47 PL/pgSQL.** Исполнитель:
[src/pl/plpgsql/src/pl_exec.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/pl/plpgsql/src/pl_exec.c);
документация: [PL/pgSQL](https://www.postgresql.org/docs/17/plpgsql.html).

**T48 Триггеры.** [Triggers](https://www.postgresql.org/docs/17/triggers.html),
[CREATE TRIGGER](https://www.postgresql.org/docs/17/sql-createtrigger.html).

**T49 Процедуры.** [CREATE PROCEDURE](https://www.postgresql.org/docs/17/sql-createprocedure.html),
[CALL](https://www.postgresql.org/docs/17/sql-call.html).

**T50 Роли/привилегии.** [Database Roles](https://www.postgresql.org/docs/17/user-manag.html),
[Privileges](https://www.postgresql.org/docs/17/ddl-priv.html),
[GRANT](https://www.postgresql.org/docs/17/sql-grant.html).

**T51 RLS.** Проверка политики при выполнении запроса — `check_enable_rls`:
[src/backend/rewrite/rowsecurity.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/rewrite/rowsecurity.c).
Документация: [Row Security Policies](https://www.postgresql.org/docs/17/ddl-rowsecurity.html),
[CREATE POLICY](https://www.postgresql.org/docs/17/sql-createpolicy.html).

**T03 Каталог.** Определения системных представлений собраны в
[src/backend/catalog/system_views.sql](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/catalog/system_views.sql);
например, `pg_stat_activity` определён на
[строке 865](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/catalog/system_views.sql#L865)
(строка проверена grep-ом на базовом коммите). Документация:
[System Catalogs](https://www.postgresql.org/docs/17/catalogs.html),
[System Views](https://www.postgresql.org/docs/17/views.html),
[The Information Schema](https://www.postgresql.org/docs/17/information-schema.html).

**T21 Представления.** Правила переписывания запросов к представлениям —
[src/backend/rewrite/rewriteHandler.c](https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/src/backend/rewrite/rewriteHandler.c);
документация: [CREATE VIEW](https://www.postgresql.org/docs/17/sql-createview.html).

**T18/T23/T25/T26 DDL/DML-команды.**
[CREATE TABLE](https://www.postgresql.org/docs/17/sql-createtable.html),
[ALTER TABLE](https://www.postgresql.org/docs/17/sql-altertable.html),
[CREATE SEQUENCE](https://www.postgresql.org/docs/17/sql-createsequence.html),
[Numeric Types](https://www.postgresql.org/docs/17/datatype-numeric.html) (SERIAL/IDENTITY),
[INSERT](https://www.postgresql.org/docs/17/sql-insert.html),
[UPDATE](https://www.postgresql.org/docs/17/sql-update.html),
[DELETE](https://www.postgresql.org/docs/17/sql-delete.html).

**T12–T17 Типы и приведение.**
[Data Types](https://www.postgresql.org/docs/17/datatype.html),
[Date/Time Types](https://www.postgresql.org/docs/17/datatype-datetime.html),
[Type Conversion](https://www.postgresql.org/docs/17/typeconv.html),
[Functions and Operators](https://www.postgresql.org/docs/17/functions.html).

**T04–T11 Запросы.**
[Tutorial: Queries](https://www.postgresql.org/docs/17/tutorial-sql.html),
[Joins Between Tables](https://www.postgresql.org/docs/17/tutorial-join.html),
[Queries](https://www.postgresql.org/docs/17/queries.html),
[LIMIT and OFFSET](https://www.postgresql.org/docs/17/queries-limit.html),
[WITH Queries](https://www.postgresql.org/docs/17/queries-with.html),
[Window Functions](https://www.postgresql.org/docs/17/tutorial-window.html),
[SELECT](https://www.postgresql.org/docs/17/sql-select.html).

**T27/T28 Транзакции.**
[Tutorial: Transactions](https://www.postgresql.org/docs/17/tutorial-transactions.html),
[BEGIN](https://www.postgresql.org/docs/17/sql-begin.html),
[COMMIT](https://www.postgresql.org/docs/17/sql-commit.html),
[Concurrency Control](https://www.postgresql.org/docs/17/mvcc.html).

**T22/T24 Схемы и партиционирование.**
[Schemas](https://www.postgresql.org/docs/17/ddl-schemas.html),
[Table Partitioning](https://www.postgresql.org/docs/17/ddl-partitioning.html).

**T46 Функции.**
[CREATE FUNCTION](https://www.postgresql.org/docs/17/sql-createfunction.html),
[Procedural Languages](https://www.postgresql.org/docs/17/xplang.html).

### 3.4. Проверка ацикличности

Все рёбра направлены от узла с меньшим номером к узлу с большим (см. «Требует» в
таблицах слоя: например, T39 требует T37 и T30; T45 — T44 и T07; T50 — T18 и T22).
Упорядочение T01 → T51 согласовано с нумерацией, поэтому граф не содержит циклов.

## 4. Граница уровней junior / junior+ / middle+

### 4.1. Junior — обязательно

Основы (T01–T05), запросы (T06–T09), базовые типы (T12–T14) и приведение (T17),
DDL с ограничениями и проектирование (T18–T21, T23), DML (T25, T26), транзакции
и изоляция (T27, T29, T30), блокировки и взаимоблокировки (T32), VACUUM концептуально
(T33), B-tree и чтение планов (T37, T41, T43, T44), функции SQL (T46), роли и
привилегии (T50).

Критерий включения: тема требуется в типичных задачах junior-разработчика
(большинство источников S1–S6) и не требует знания эксплуатации сервера.

### 4.2. Junior+ — желательно

Метакоманды и каталог (T03), рекурсивные CTE и оконные функции (T10, T11),
массивы и JSONB (T15, T16), схемы и search_path (T22), партиционирование (T24),
savepoints (T28), Serializable/SSI (T31), архитектура процессов/страницы/TOAST
(T34–T36), расширенные индексы и index-only scan (T38–T40), статистика планировщика
(T42), сортировка/агрегация и параметры стоимости (T45), PL/pgSQL, триггеры,
процедуры (T47–T49), RLS (T51).

### 4.3. Middle+ и эксплуатация — в учебник не входят (справочные пометки)

В тексте глав допускается только короткая пометка «существует, для углубления — ссылка»:

| Область | Справочная ссылка для пометки |
|---------|-------------------------------|
| Репликация (физическая и логическая) | [High Availability, Load Balancing, and Replication](https://www.postgresql.org/docs/17/high-availability.html), [Logical Replication](https://www.postgresql.org/docs/17/logical-replication.html) |
| Бэкапы и восстановление | [Backup and Restore](https://www.postgresql.org/docs/17/backup.html) |
| Мониторинг (в т.ч. pg_stat_statements) | [Monitoring Database Activity](https://www.postgresql.org/docs/17/monitoring.html), [Additional Supplied Modules](https://www.postgresql.org/docs/17/contrib.html) |
| Тонкая настройка GUC, ресурсные параметры | [Server Configuration](https://www.postgresql.org/docs/17/runtime-config.html) |
| Кластеризация, отказоустойчивость | Вне документации ядра (сторонние решения); в учебнике — только упоминание, без названий продуктов |
| Шардирование | Аналогично: подходы описаны у S5/S6 на уровне теории распределённых БД |
| WAL, режимы журнала, восстановление после сбоя | [Reliability and the Write-Ahead Log](https://www.postgresql.org/docs/17/wal.html) — концепция durability упоминается в T27 одной фразой |
| Пул соединений | Вне документации ядра; упоминается только факт «одно соединение — один серверный процесс» (T34) и существование пулеров |
| FTS, протокол клиент-сервер, наследование таблиц | [Text Search](https://www.postgresql.org/docs/17/textsearch.html), [Frontend/Backend Protocol](https://www.postgresql.org/docs/17/protocol.html), [Inheritance](https://www.postgresql.org/docs/17/tutorial-inheritance.html) |
| API методов доступа (table AM, index AM, custom scan) | [Table Access Method Interface](https://www.postgresql.org/docs/17/tableam.html), [Index Access Method Interface](https://www.postgresql.org/docs/17/indexam.html), [Writing a Custom Scan Provider](https://www.postgresql.org/docs/17/custom-scan.html) |

## 5. Источники

### 5.1. Документация PostgreSQL 17.11 (все проверены HTTP 200, 2026-11-12)

Базовый префикс `https://www.postgresql.org/docs/17/`:

`tutorial`, `tutorial-sql`, `tutorial-advanced`, `tutorial-join`, `tutorial-window`,
`tutorial-transactions`, `tutorial-inheritance`, `sql-syntax`, `ddl`,
`ddl-constraints`, `ddl-schemas`, `ddl-partitioning`, `dml`, `queries`,
`queries-limit`, `queries-with`, `sql-select`, `datatype`, `datatype-numeric`,
`datatype-datetime`, `functions`, `typeconv`, `indexes`, `indexes-types`,
`indexes-ordering`, `indexes-partial`, `indexes-expressional`,
`indexes-index-only-scans`, `indexes-examine`, `mvcc`, `mvcc-intro`, `transaction-iso`,
`explicit-locking`, `locking-indexes`, `performance-tips`, `parallel-query`,
`triggers`, `sql-createtrigger`, `plpgsql`, `xplang`, `sql-createfunction`,
`sql-createprocedure`, `sql-call`, `internals`, `overview`, `catalogs`, `views`,
`storage`, `storage-page-layout`, `storage-toast`, `transactions`,
`planner-stats-details`, `information-schema`, `sql-explain`, `sql-vacuum`,
`sql-analyze`, `sql-begin`, `sql-commit`, `sql-insert`, `sql-update`, `sql-delete`,
`sql-createtable`, `sql-altertable`, `sql-createsequence`, `sql-createindex`,
`sql-createview`, `sql-grant`, `sql-createpolicy`, `user-manag`, `ddl-priv`,
`ddl-rowsecurity`, `maintenance`, `wal`, `high-availability`, `logical-replication`,
`backup`, `monitoring`, `runtime-config`, `contrib`, `protocol`, `textsearch`,
`tableam`, `indexam`, `custom-scan`.

### 5.2. Исходный код на базовом коммите (все проверены HTTP 200, 2026-11-12)

Префикс: `https://github.com/postgres/postgres/blob/083ac033419f690758508e08c1736089384bbee8/`

`src/backend/access/heap/heapam.c`, `src/backend/access/heap/vacuumlazy.c`,
`src/backend/access/transam/xact.c`, `src/backend/access/transam/varsup.c`,
`src/backend/storage/ipc/procarray.c`, `src/backend/utils/time/snapmgr.c`,
`src/backend/storage/lmgr/predicate.c`, `src/backend/storage/lmgr/lock.c`,
`src/backend/storage/lmgr/lmgr.c`, `src/backend/storage/buffer/bufmgr.c`,
`src/backend/storage/buffer/README`, `src/backend/access/nbtree/README`,
`src/backend/access/hash/README`, `src/backend/access/gist/README`,
`src/backend/access/gin/README`, `src/backend/access/spgist/README`,
`src/backend/access/brin/README`, `src/backend/optimizer/README`,
`src/backend/optimizer/plan/planner.c`, `src/backend/commands/explain.c`,
`src/backend/commands/vacuum.c`, `src/backend/commands/analyze.c`,
`src/backend/utils/adt/selfuncs.c`, `src/backend/parser/gram.y`,
`src/backend/parser/analyze.c`, `src/backend/tcop/postgres.c`,
`src/backend/executor/execMain.c`, `src/backend/executor/nodeSeqscan.c`,
`src/backend/executor/nodeNestloop.c`, `src/backend/executor/nodeHashjoin.c`,
`src/backend/executor/nodeMergejoin.c`, `src/backend/executor/nodeIndexonlyscan.c`,
`src/backend/executor/nodeAgg.c`, `src/backend/utils/sort/tuplesort.c`,
`src/backend/postmaster/postmaster.c`, `src/backend/access/common/toast_internals.c`,
`src/backend/catalog/system_views.sql`, `src/backend/rewrite/rewriteHandler.c`,
`src/backend/rewrite/rowsecurity.c`, `src/pl/plpgsql/src/pl_exec.c`,
`src/include/access/htup_details.h`, `src/include/access/transam.h`,
`src/include/storage/bufpage.h`, `src/include/utils/snapshot.h`,
`src/include/catalog/pg_statistic.h`, `src/include/c.h`.

### 5.3. Функции и структуры, существование которых проверено grep-ом по raw-файлам на базовом коммите (2026-11-12)

`heap_insert`, `heap_update`, `heap_delete` (heapam.c) ·
`HeapTupleHeaderData`, `t_xmin` (htup_details.h) ·
`PageHeaderData` (bufpage.h) ·
`StartTransactionCommand`, `CommitTransactionCommand` (xact.c) ·
`GetNewTransactionId` (varsup.c) ·
`GetTransactionSnapshot` (snapmgr.c) ·
`SnapshotData` (snapshot.h) ·
`GetSnapshotData` (procarray.c) ·
`LockAcquire` (lock.c) ·
`XactLockTableWait` (lmgr.c) ·
`ReadBufferExtended` (bufmgr.c) ·
`standard_planner`, `subquery_planner` (planner.c) ·
`ExplainOnePlan` (explain.c) ·
`vacuum` (commands/vacuum.c) ·
`heap_vacuum_rel`, `lazy_scan_heap` (vacuumlazy.c) ·
`do_analyze_rel` (analyze.c) ·
`eqsel` (selfuncs.c) ·
`transformStmt` (parser/analyze.c) ·
`exec_simple_query` (postgres.c) ·
`ExecNestLoop` (nodeNestloop.c) ·
`ExecHashJoin` (nodeHashjoin.c) ·
`ExecMergeJoin` (nodeMergejoin.c) ·
`ExecSeqScan` (nodeSeqscan.c) ·
`toast_save_datum` (toast_internals.c) ·
`check_enable_rls` (rowsecurity.c) ·
`typedef uint32 TransactionId` — c.h, строка 669 ·
эпоха/XID из `FullTransactionId` — transam.h, строки 47–48 ·
`CREATE VIEW pg_stat_activity` — system_views.sql, строка 865.

### 5.4. Учебные программы

1. Документация PostgreSQL 17.11: <https://www.postgresql.org/docs/17/>
2. Моргунов Е. П. PostgreSQL. Основы языка SQL: <https://edu.postgrespro.ru/sql_primer.pdf>
3. PostgreSQL 18 изнутри: <https://postgrespro.ru/education/books/internals>
   (издание для 17-й ветки: <https://edu.postgrespro.ru/postgresql_internals-17.pdf>)
4. PostgreSQL 18. Оптимизация запросов: <https://postgrespro.ru/education/books/qptbook>
5. Silberschatz A., Korth H. F., Sudarshan S. Database System Concepts, 7th ed.:
   <https://db-book.com/> (глобальное оглавление: <https://db-book.com/toc-dir/toc.pdf>)
6. CMU 15-445/645 Intro to Database Systems, Spring 2025:
   <https://15445.courses.cs.cmu.edu/spring2025/schedule.html>

Отклонённые при проверке кандидаты и причины — раздел 1.8.
