/* Оглавление учебника «Интерактивный учебник по PostgreSQL».
 * Источник структуры: 02_outline.md (соответствие узлам DAG — 01_analysis_and_topic_map.md).
 * Файл генерируется вместе с заглушками глав; при изменении оглавления обновлять синхронно.
 */
const BOOK_NAV = [
  {
    id: "m01",
    num: 1,
    title: "\u041e\u0441\u043d\u043e\u0432\u044b \u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",
    chapters: [
      { slug: "01-01-db-and-relational-model", num: "1.1", title: "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c", level: "J", dag: "T01" },
      { slug: "01-02-cluster-database-role-psql", num: "1.2", title: "\u041a\u043b\u0430\u0441\u0442\u0435\u0440, \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0440\u043e\u043b\u044c; psql", level: "J", dag: "T02" },
      { slug: "01-03-system-catalog", num: "1.3", title: "\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438 information_schema", level: "J+", dag: "T03" },
    ]
  },
  {
    id: "m02",
    num: 2,
    title: "\u0417\u0430\u043f\u0440\u043e\u0441\u044b SELECT",
    chapters: [
      { slug: "02-01-select-where-null", num: "2.1", title: "SELECT: \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f, WHERE, NULL \u0438 \u0442\u0440\u0451\u0445\u0437\u043d\u0430\u0447\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430", level: "J", dag: "T04" },
      { slug: "02-02-order-limit-distinct", num: "2.2", title: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, LIMIT/OFFSET, DISTINCT", level: "J", dag: "T05" },
      { slug: "02-03-joins", num: "2.3", title: "\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f JOIN", level: "J", dag: "T06" },
      { slug: "02-04-group-by-having", num: "2.4", title: "\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f: GROUP BY \u0438 HAVING", level: "J", dag: "T07" },
      { slug: "02-05-subqueries", num: "2.5", title: "\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b", level: "J", dag: "T08" },
      { slug: "02-06-cte-with", num: "2.6", title: "\u041e\u0431\u0449\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f (WITH)", level: "J", dag: "T09" },
      { slug: "02-07-recursive-cte", num: "2.7", title: "\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0435 CTE", level: "J+", dag: "T10" },
      { slug: "02-08-window-functions", num: "2.8", title: "\u041e\u043a\u043e\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438", level: "J+", dag: "T11" },
    ]
  },
  {
    id: "m03",
    num: 3,
    title: "\u0422\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",
    chapters: [
      { slug: "03-01-numeric-text-types", num: "3.1", title: "\u0427\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u0438 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0442\u0438\u043f\u044b", level: "J", dag: "T12" },
      { slug: "03-02-datetime-types", num: "3.2", title: "\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f", level: "J", dag: "T13" },
      { slug: "03-03-boolean-uuid-enum", num: "3.3", title: "boolean, uuid, enum", level: "J", dag: "T14" },
      { slug: "03-04-arrays", num: "3.4", title: "\u041c\u0430\u0441\u0441\u0438\u0432\u044b", level: "J+", dag: "T15" },
      { slug: "03-05-json-jsonb", num: "3.5", title: "JSON \u0438 JSONB", level: "J+", dag: "T16" },
      { slug: "03-06-type-conversion", num: "3.6", title: "\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432", level: "J", dag: "T17" },
    ]
  },
  {
    id: "m04",
    num: 4,
    title: "DDL \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0445\u0435\u043c",
    chapters: [
      { slug: "04-01-create-table", num: "4.1", title: "CREATE TABLE: \u0441\u0442\u043e\u043b\u0431\u0446\u044b, DEFAULT, \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b", level: "J", dag: "T18" },
      { slug: "04-02-constraints", num: "4.2", title: "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f: NOT NULL, UNIQUE, PK, FK, CHECK", level: "J", dag: "T19" },
      { slug: "04-03-normalization-and-relations", num: "4.3", title: "\u0421\u0432\u044f\u0437\u0438 \u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f", level: "J", dag: "T20" },
      { slug: "04-04-alter-table-views", num: "4.4", title: "ALTER TABLE \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f", level: "J", dag: "T21" },
      { slug: "04-05-schemas-search-path", num: "4.5", title: "\u0421\u0445\u0435\u043c\u044b \u0438 search_path", level: "J+", dag: "T22" },
      { slug: "04-06-sequences-identity", num: "4.6", title: "\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438: SERIAL \u0438 GENERATED AS IDENTITY", level: "J", dag: "T23" },
      { slug: "04-07-partitioning", num: "4.7", title: "\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435", level: "J+", dag: "T24" },
    ]
  },
  {
    id: "m05",
    num: 5,
    title: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",
    chapters: [
      { slug: "05-01-insert-on-conflict", num: "5.1", title: "INSERT \u0438 ON CONFLICT", level: "J", dag: "T25" },
      { slug: "05-02-update-delete-returning", num: "5.2", title: "UPDATE, DELETE, RETURNING", level: "J", dag: "T26" },
    ]
  },
  {
    id: "m06",
    num: 6,
    title: "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c",
    chapters: [
      { slug: "06-01-transactions-acid", num: "6.1", title: "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0438 ACID", level: "J", dag: "T27" },
      { slug: "06-02-savepoints-errors", num: "6.2", title: "Savepoints \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a", level: "J+", dag: "T28" },
      { slug: "06-03-isolation-levels", num: "6.3", title: "\u0423\u0440\u043e\u0432\u043d\u0438 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0438", level: "J", dag: "T29" },
      { slug: "06-04-mvcc", num: "6.4", title: "MVCC: \u0432\u0435\u0440\u0441\u0438\u0438 \u0441\u0442\u0440\u043e\u043a \u0438 \u0441\u043d\u0438\u043c\u043a\u0438", level: "J", dag: "T30" },
      { slug: "06-05-serializable-ssi", num: "6.5", title: "SERIALIZABLE \u0438 SSI", level: "J+", dag: "T31" },
      { slug: "06-06-locking", num: "6.6", title: "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u0442\u0443\u043f\u0438\u043a\u0438", level: "J", dag: "T32" },
      { slug: "06-07-vacuum", num: "6.7", title: "VACUUM: \u0437\u0430\u0447\u0435\u043c \u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043c\u0451\u0440\u0442\u0432\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438", level: "J", dag: "T33" },
    ]
  },
  {
    id: "m07",
    num: 7,
    title: "\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0443\u0442\u0440\u0438",
    chapters: [
      { slug: "07-01-process-architecture", num: "7.1", title: "\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0438 \u043f\u0430\u043c\u044f\u0442\u0438", level: "J+", dag: "T34" },
      { slug: "07-02-pages-tuples", num: "7.2", title: "\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043a\u043e\u0440\u0442\u0435\u0436\u0438", level: "J+", dag: "T35" },
      { slug: "07-03-toast", num: "7.3", title: "TOAST: \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439", level: "J+", dag: "T36" },
    ]
  },
  {
    id: "m08",
    num: 8,
    title: "\u0418\u043d\u0434\u0435\u043a\u0441\u044b",
    chapters: [
      { slug: "08-01-btree", num: "8.1", title: "B-tree: \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435", level: "J", dag: "T37" },
      { slug: "08-02-composite-partial-expressions", num: "8.2", title: "\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435, \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u043d\u0430 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445", level: "J+", dag: "T38" },
      { slug: "08-03-index-only-scan", num: "8.3", title: "Index-only scan \u0438 \u043a\u0430\u0440\u0442\u0430 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438", level: "J+", dag: "T39" },
      { slug: "08-04-other-index-methods", num: "8.4", title: "\u0414\u0440\u0443\u0433\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u044b: hash, GIN, GiST, SP-GiST, BRIN", level: "J+", dag: "T40" },
    ]
  },
  {
    id: "m09",
    num: 9,
    title: "\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0438 EXPLAIN",
    chapters: [
      { slug: "09-01-query-path", num: "9.1", title: "\u041f\u0443\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430: \u043e\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430", level: "J", dag: "T41" },
      { slug: "09-02-planner-statistics", num: "9.2", title: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430", level: "J+", dag: "T42" },
      { slug: "09-03-explain", num: "9.3", title: "EXPLAIN: \u0447\u0442\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430", level: "J", dag: "T43" },
      { slug: "09-04-scan-join-methods", num: "9.4", title: "\u041c\u0435\u0442\u043e\u0434\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0432 \u043f\u043b\u0430\u043d\u0430\u0445", level: "J", dag: "T44" },
      { slug: "09-05-sort-aggregation-cost", num: "9.5", title: "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f \u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c", level: "J+", dag: "T45" },
    ]
  },
  {
    id: "m10",
    num: 10,
    title: "\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
    chapters: [
      { slug: "10-01-sql-functions", num: "10.1", title: "\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430 SQL", level: "J", dag: "T46" },
      { slug: "10-02-plpgsql", num: "10.2", title: "PL/pgSQL", level: "J+", dag: "T47" },
      { slug: "10-03-triggers", num: "10.3", title: "\u0422\u0440\u0438\u0433\u0433\u0435\u0440\u044b", level: "J+", dag: "T48" },
      { slug: "10-04-procedures-call", num: "10.4", title: "\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0438 CALL", level: "J+", dag: "T49" },
    ]
  },
  {
    id: "m11",
    num: 11,
    title: "\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",
    chapters: [
      { slug: "11-01-roles-privileges", num: "11.1", title: "\u0420\u043e\u043b\u0438, \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u0435", level: "J", dag: "T50" },
      { slug: "11-02-row-level-security", num: "11.2", title: "Row-Level Security", level: "J+", dag: "T51" },
    ]
  },
];
