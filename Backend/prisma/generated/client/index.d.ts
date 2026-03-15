
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Classe
 * 
 */
export type Classe = $Result.DefaultSelection<Prisma.$ClassePayload>
/**
 * Model Studente
 * 
 */
export type Studente = $Result.DefaultSelection<Prisma.$StudentePayload>
/**
 * Model Documento
 * 
 */
export type Documento = $Result.DefaultSelection<Prisma.$DocumentoPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Indicatore
 * 
 */
export type Indicatore = $Result.DefaultSelection<Prisma.$IndicatorePayload>
/**
 * Model Allegato
 * 
 */
export type Allegato = $Result.DefaultSelection<Prisma.$AllegatoPayload>
/**
 * Model ICF
 * 
 */
export type ICF = $Result.DefaultSelection<Prisma.$ICFPayload>
/**
 * Model Insegnamento
 * 
 */
export type Insegnamento = $Result.DefaultSelection<Prisma.$InsegnamentoPayload>
/**
 * Model Classe_Studente
 * 
 */
export type Classe_Studente = $Result.DefaultSelection<Prisma.$Classe_StudentePayload>
/**
 * Model Materia_Indicatore
 * 
 */
export type Materia_Indicatore = $Result.DefaultSelection<Prisma.$Materia_IndicatorePayload>
/**
 * Model Materia_Documento
 * 
 */
export type Materia_Documento = $Result.DefaultSelection<Prisma.$Materia_DocumentoPayload>
/**
 * Model Documento_ICF
 * 
 */
export type Documento_ICF = $Result.DefaultSelection<Prisma.$Documento_ICFPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Stato: {
  IN_BOZZA: 'IN_BOZZA',
  VALIDATO: 'VALIDATO',
  SCADUTO: 'SCADUTO'
};

export type Stato = (typeof Stato)[keyof typeof Stato]


export const Tipologia_Doc: {
  DSA: 'DSA',
  BES: 'BES'
};

export type Tipologia_Doc = (typeof Tipologia_Doc)[keyof typeof Tipologia_Doc]


export const Tipologia_Ind: {
  DSA: 'DSA',
  BES: 'BES',
  ENTRAMBI: 'ENTRAMBI'
};

export type Tipologia_Ind = (typeof Tipologia_Ind)[keyof typeof Tipologia_Ind]


export const Categoria: {
  STRUMENTI_COMPENSATIVI: 'STRUMENTI_COMPENSATIVI',
  MISURE_DISPENSATIVE: 'MISURE_DISPENSATIVE',
  MODALITA_VERIFICA: 'MODALITA_VERIFICA',
  CRITERI_VALUTAZIONE: 'CRITERI_VALUTAZIONE'
};

export type Categoria = (typeof Categoria)[keyof typeof Categoria]

}

export type Stato = $Enums.Stato

export const Stato: typeof $Enums.Stato

export type Tipologia_Doc = $Enums.Tipologia_Doc

export const Tipologia_Doc: typeof $Enums.Tipologia_Doc

export type Tipologia_Ind = $Enums.Tipologia_Ind

export const Tipologia_Ind: typeof $Enums.Tipologia_Ind

export type Categoria = $Enums.Categoria

export const Categoria: typeof $Enums.Categoria

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Docentes
 * const docentes = await prisma.docente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Docentes
   * const docentes = await prisma.docente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classe`: Exposes CRUD operations for the **Classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.ClasseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studente`: Exposes CRUD operations for the **Studente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studentes
    * const studentes = await prisma.studente.findMany()
    * ```
    */
  get studente(): Prisma.StudenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento`: Exposes CRUD operations for the **Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentos
    * const documentos = await prisma.documento.findMany()
    * ```
    */
  get documento(): Prisma.DocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indicatore`: Exposes CRUD operations for the **Indicatore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indicatores
    * const indicatores = await prisma.indicatore.findMany()
    * ```
    */
  get indicatore(): Prisma.IndicatoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allegato`: Exposes CRUD operations for the **Allegato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allegatoes
    * const allegatoes = await prisma.allegato.findMany()
    * ```
    */
  get allegato(): Prisma.AllegatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iCF`: Exposes CRUD operations for the **ICF** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ICFS
    * const iCFS = await prisma.iCF.findMany()
    * ```
    */
  get iCF(): Prisma.ICFDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insegnamento`: Exposes CRUD operations for the **Insegnamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insegnamentos
    * const insegnamentos = await prisma.insegnamento.findMany()
    * ```
    */
  get insegnamento(): Prisma.InsegnamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classe_Studente`: Exposes CRUD operations for the **Classe_Studente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classe_Studentes
    * const classe_Studentes = await prisma.classe_Studente.findMany()
    * ```
    */
  get classe_Studente(): Prisma.Classe_StudenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia_Indicatore`: Exposes CRUD operations for the **Materia_Indicatore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materia_Indicatores
    * const materia_Indicatores = await prisma.materia_Indicatore.findMany()
    * ```
    */
  get materia_Indicatore(): Prisma.Materia_IndicatoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia_Documento`: Exposes CRUD operations for the **Materia_Documento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materia_Documentos
    * const materia_Documentos = await prisma.materia_Documento.findMany()
    * ```
    */
  get materia_Documento(): Prisma.Materia_DocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documento_ICF`: Exposes CRUD operations for the **Documento_ICF** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documento_ICFS
    * const documento_ICFS = await prisma.documento_ICF.findMany()
    * ```
    */
  get documento_ICF(): Prisma.Documento_ICFDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Docente: 'Docente',
    Classe: 'Classe',
    Studente: 'Studente',
    Documento: 'Documento',
    Materia: 'Materia',
    Indicatore: 'Indicatore',
    Allegato: 'Allegato',
    ICF: 'ICF',
    Insegnamento: 'Insegnamento',
    Classe_Studente: 'Classe_Studente',
    Materia_Indicatore: 'Materia_Indicatore',
    Materia_Documento: 'Materia_Documento',
    Documento_ICF: 'Documento_ICF'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "docente" | "classe" | "studente" | "documento" | "materia" | "indicatore" | "allegato" | "iCF" | "insegnamento" | "classe_Studente" | "materia_Indicatore" | "materia_Documento" | "documento_ICF"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          createMany: {
            args: Prisma.DocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Classe: {
        payload: Prisma.$ClassePayload<ExtArgs>
        fields: Prisma.ClasseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findFirst: {
            args: Prisma.ClasseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          findMany: {
            args: Prisma.ClasseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          create: {
            args: Prisma.ClasseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          createMany: {
            args: Prisma.ClasseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClasseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          delete: {
            args: Prisma.ClasseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          update: {
            args: Prisma.ClasseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          deleteMany: {
            args: Prisma.ClasseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClasseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>[]
          }
          upsert: {
            args: Prisma.ClasseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.ClasseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasseCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
          }
        }
      }
      Studente: {
        payload: Prisma.$StudentePayload<ExtArgs>
        fields: Prisma.StudenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          findFirst: {
            args: Prisma.StudenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          findMany: {
            args: Prisma.StudenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>[]
          }
          create: {
            args: Prisma.StudenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          createMany: {
            args: Prisma.StudenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>[]
          }
          delete: {
            args: Prisma.StudenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          update: {
            args: Prisma.StudenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          deleteMany: {
            args: Prisma.StudenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>[]
          }
          upsert: {
            args: Prisma.StudenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentePayload>
          }
          aggregate: {
            args: Prisma.StudenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudente>
          }
          groupBy: {
            args: Prisma.StudenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudenteCountArgs<ExtArgs>
            result: $Utils.Optional<StudenteCountAggregateOutputType> | number
          }
        }
      }
      Documento: {
        payload: Prisma.$DocumentoPayload<ExtArgs>
        fields: Prisma.DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findFirst: {
            args: Prisma.DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          findMany: {
            args: Prisma.DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          create: {
            args: Prisma.DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          createMany: {
            args: Prisma.DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          delete: {
            args: Prisma.DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          update: {
            args: Prisma.DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoPayload>
          }
          aggregate: {
            args: Prisma.DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento>
          }
          groupBy: {
            args: Prisma.DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Indicatore: {
        payload: Prisma.$IndicatorePayload<ExtArgs>
        fields: Prisma.IndicatoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndicatoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndicatoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          findFirst: {
            args: Prisma.IndicatoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndicatoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          findMany: {
            args: Prisma.IndicatoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>[]
          }
          create: {
            args: Prisma.IndicatoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          createMany: {
            args: Prisma.IndicatoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndicatoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>[]
          }
          delete: {
            args: Prisma.IndicatoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          update: {
            args: Prisma.IndicatoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          deleteMany: {
            args: Prisma.IndicatoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndicatoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndicatoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>[]
          }
          upsert: {
            args: Prisma.IndicatoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndicatorePayload>
          }
          aggregate: {
            args: Prisma.IndicatoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndicatore>
          }
          groupBy: {
            args: Prisma.IndicatoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndicatoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndicatoreCountArgs<ExtArgs>
            result: $Utils.Optional<IndicatoreCountAggregateOutputType> | number
          }
        }
      }
      Allegato: {
        payload: Prisma.$AllegatoPayload<ExtArgs>
        fields: Prisma.AllegatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllegatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllegatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          findFirst: {
            args: Prisma.AllegatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllegatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          findMany: {
            args: Prisma.AllegatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>[]
          }
          create: {
            args: Prisma.AllegatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          createMany: {
            args: Prisma.AllegatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllegatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>[]
          }
          delete: {
            args: Prisma.AllegatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          update: {
            args: Prisma.AllegatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          deleteMany: {
            args: Prisma.AllegatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllegatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllegatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>[]
          }
          upsert: {
            args: Prisma.AllegatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllegatoPayload>
          }
          aggregate: {
            args: Prisma.AllegatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllegato>
          }
          groupBy: {
            args: Prisma.AllegatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllegatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllegatoCountArgs<ExtArgs>
            result: $Utils.Optional<AllegatoCountAggregateOutputType> | number
          }
        }
      }
      ICF: {
        payload: Prisma.$ICFPayload<ExtArgs>
        fields: Prisma.ICFFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ICFFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ICFFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          findFirst: {
            args: Prisma.ICFFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ICFFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          findMany: {
            args: Prisma.ICFFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>[]
          }
          create: {
            args: Prisma.ICFCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          createMany: {
            args: Prisma.ICFCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ICFCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>[]
          }
          delete: {
            args: Prisma.ICFDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          update: {
            args: Prisma.ICFUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          deleteMany: {
            args: Prisma.ICFDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ICFUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ICFUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>[]
          }
          upsert: {
            args: Prisma.ICFUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ICFPayload>
          }
          aggregate: {
            args: Prisma.ICFAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateICF>
          }
          groupBy: {
            args: Prisma.ICFGroupByArgs<ExtArgs>
            result: $Utils.Optional<ICFGroupByOutputType>[]
          }
          count: {
            args: Prisma.ICFCountArgs<ExtArgs>
            result: $Utils.Optional<ICFCountAggregateOutputType> | number
          }
        }
      }
      Insegnamento: {
        payload: Prisma.$InsegnamentoPayload<ExtArgs>
        fields: Prisma.InsegnamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsegnamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsegnamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          findFirst: {
            args: Prisma.InsegnamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsegnamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          findMany: {
            args: Prisma.InsegnamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>[]
          }
          create: {
            args: Prisma.InsegnamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          createMany: {
            args: Prisma.InsegnamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsegnamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>[]
          }
          delete: {
            args: Prisma.InsegnamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          update: {
            args: Prisma.InsegnamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          deleteMany: {
            args: Prisma.InsegnamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsegnamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsegnamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>[]
          }
          upsert: {
            args: Prisma.InsegnamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsegnamentoPayload>
          }
          aggregate: {
            args: Prisma.InsegnamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsegnamento>
          }
          groupBy: {
            args: Prisma.InsegnamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsegnamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsegnamentoCountArgs<ExtArgs>
            result: $Utils.Optional<InsegnamentoCountAggregateOutputType> | number
          }
        }
      }
      Classe_Studente: {
        payload: Prisma.$Classe_StudentePayload<ExtArgs>
        fields: Prisma.Classe_StudenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Classe_StudenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Classe_StudenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          findFirst: {
            args: Prisma.Classe_StudenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Classe_StudenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          findMany: {
            args: Prisma.Classe_StudenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>[]
          }
          create: {
            args: Prisma.Classe_StudenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          createMany: {
            args: Prisma.Classe_StudenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Classe_StudenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>[]
          }
          delete: {
            args: Prisma.Classe_StudenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          update: {
            args: Prisma.Classe_StudenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          deleteMany: {
            args: Prisma.Classe_StudenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Classe_StudenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Classe_StudenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>[]
          }
          upsert: {
            args: Prisma.Classe_StudenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Classe_StudentePayload>
          }
          aggregate: {
            args: Prisma.Classe_StudenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse_Studente>
          }
          groupBy: {
            args: Prisma.Classe_StudenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Classe_StudenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Classe_StudenteCountArgs<ExtArgs>
            result: $Utils.Optional<Classe_StudenteCountAggregateOutputType> | number
          }
        }
      }
      Materia_Indicatore: {
        payload: Prisma.$Materia_IndicatorePayload<ExtArgs>
        fields: Prisma.Materia_IndicatoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Materia_IndicatoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Materia_IndicatoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          findFirst: {
            args: Prisma.Materia_IndicatoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Materia_IndicatoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          findMany: {
            args: Prisma.Materia_IndicatoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>[]
          }
          create: {
            args: Prisma.Materia_IndicatoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          createMany: {
            args: Prisma.Materia_IndicatoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Materia_IndicatoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>[]
          }
          delete: {
            args: Prisma.Materia_IndicatoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          update: {
            args: Prisma.Materia_IndicatoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          deleteMany: {
            args: Prisma.Materia_IndicatoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Materia_IndicatoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Materia_IndicatoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>[]
          }
          upsert: {
            args: Prisma.Materia_IndicatoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_IndicatorePayload>
          }
          aggregate: {
            args: Prisma.Materia_IndicatoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria_Indicatore>
          }
          groupBy: {
            args: Prisma.Materia_IndicatoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<Materia_IndicatoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.Materia_IndicatoreCountArgs<ExtArgs>
            result: $Utils.Optional<Materia_IndicatoreCountAggregateOutputType> | number
          }
        }
      }
      Materia_Documento: {
        payload: Prisma.$Materia_DocumentoPayload<ExtArgs>
        fields: Prisma.Materia_DocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Materia_DocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Materia_DocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          findFirst: {
            args: Prisma.Materia_DocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Materia_DocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          findMany: {
            args: Prisma.Materia_DocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>[]
          }
          create: {
            args: Prisma.Materia_DocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          createMany: {
            args: Prisma.Materia_DocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Materia_DocumentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>[]
          }
          delete: {
            args: Prisma.Materia_DocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          update: {
            args: Prisma.Materia_DocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          deleteMany: {
            args: Prisma.Materia_DocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Materia_DocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Materia_DocumentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>[]
          }
          upsert: {
            args: Prisma.Materia_DocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Materia_DocumentoPayload>
          }
          aggregate: {
            args: Prisma.Materia_DocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria_Documento>
          }
          groupBy: {
            args: Prisma.Materia_DocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Materia_DocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Materia_DocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<Materia_DocumentoCountAggregateOutputType> | number
          }
        }
      }
      Documento_ICF: {
        payload: Prisma.$Documento_ICFPayload<ExtArgs>
        fields: Prisma.Documento_ICFFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Documento_ICFFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Documento_ICFFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          findFirst: {
            args: Prisma.Documento_ICFFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Documento_ICFFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          findMany: {
            args: Prisma.Documento_ICFFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>[]
          }
          create: {
            args: Prisma.Documento_ICFCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          createMany: {
            args: Prisma.Documento_ICFCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Documento_ICFCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>[]
          }
          delete: {
            args: Prisma.Documento_ICFDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          update: {
            args: Prisma.Documento_ICFUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          deleteMany: {
            args: Prisma.Documento_ICFDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Documento_ICFUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Documento_ICFUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>[]
          }
          upsert: {
            args: Prisma.Documento_ICFUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Documento_ICFPayload>
          }
          aggregate: {
            args: Prisma.Documento_ICFAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumento_ICF>
          }
          groupBy: {
            args: Prisma.Documento_ICFGroupByArgs<ExtArgs>
            result: $Utils.Optional<Documento_ICFGroupByOutputType>[]
          }
          count: {
            args: Prisma.Documento_ICFCountArgs<ExtArgs>
            result: $Utils.Optional<Documento_ICFCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    docente?: DocenteOmit
    classe?: ClasseOmit
    studente?: StudenteOmit
    documento?: DocumentoOmit
    materia?: MateriaOmit
    indicatore?: IndicatoreOmit
    allegato?: AllegatoOmit
    iCF?: ICFOmit
    insegnamento?: InsegnamentoOmit
    classe_Studente?: Classe_StudenteOmit
    materia_Indicatore?: Materia_IndicatoreOmit
    materia_Documento?: Materia_DocumentoOmit
    documento_ICF?: Documento_ICFOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    Insegnamenti: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | DocenteCountOutputTypeCountInsegnamentiArgs
  }

  // Custom InputTypes
  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountInsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsegnamentoWhereInput
  }


  /**
   * Count Type ClasseCountOutputType
   */

  export type ClasseCountOutputType = {
    Insegnamenti: number
    Classi_Studente: number
  }

  export type ClasseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | ClasseCountOutputTypeCountInsegnamentiArgs
    Classi_Studente?: boolean | ClasseCountOutputTypeCountClassi_StudenteArgs
  }

  // Custom InputTypes
  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasseCountOutputType
     */
    select?: ClasseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountInsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsegnamentoWhereInput
  }

  /**
   * ClasseCountOutputType without action
   */
  export type ClasseCountOutputTypeCountClassi_StudenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Classe_StudenteWhereInput
  }


  /**
   * Count Type StudenteCountOutputType
   */

  export type StudenteCountOutputType = {
    Documento: number
    Classi_Studente: number
  }

  export type StudenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documento?: boolean | StudenteCountOutputTypeCountDocumentoArgs
    Classi_Studente?: boolean | StudenteCountOutputTypeCountClassi_StudenteArgs
  }

  // Custom InputTypes
  /**
   * StudenteCountOutputType without action
   */
  export type StudenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudenteCountOutputType
     */
    select?: StudenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudenteCountOutputType without action
   */
  export type StudenteCountOutputTypeCountDocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
  }

  /**
   * StudenteCountOutputType without action
   */
  export type StudenteCountOutputTypeCountClassi_StudenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Classe_StudenteWhereInput
  }


  /**
   * Count Type DocumentoCountOutputType
   */

  export type DocumentoCountOutputType = {
    Materie_Documento: number
    Documento_ICFs: number
    Allegati: number
  }

  export type DocumentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materie_Documento?: boolean | DocumentoCountOutputTypeCountMaterie_DocumentoArgs
    Documento_ICFs?: boolean | DocumentoCountOutputTypeCountDocumento_ICFsArgs
    Allegati?: boolean | DocumentoCountOutputTypeCountAllegatiArgs
  }

  // Custom InputTypes
  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoCountOutputType
     */
    select?: DocumentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeCountMaterie_DocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_DocumentoWhereInput
  }

  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeCountDocumento_ICFsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Documento_ICFWhereInput
  }

  /**
   * DocumentoCountOutputType without action
   */
  export type DocumentoCountOutputTypeCountAllegatiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllegatoWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    Insegnamenti: number
    Materie_Indicatore: number
    Materie_Documento: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | MateriaCountOutputTypeCountInsegnamentiArgs
    Materie_Indicatore?: boolean | MateriaCountOutputTypeCountMaterie_IndicatoreArgs
    Materie_Documento?: boolean | MateriaCountOutputTypeCountMaterie_DocumentoArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountInsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsegnamentoWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountMaterie_IndicatoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_IndicatoreWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountMaterie_DocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_DocumentoWhereInput
  }


  /**
   * Count Type IndicatoreCountOutputType
   */

  export type IndicatoreCountOutputType = {
    Materia_Indicatori: number
  }

  export type IndicatoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia_Indicatori?: boolean | IndicatoreCountOutputTypeCountMateria_IndicatoriArgs
  }

  // Custom InputTypes
  /**
   * IndicatoreCountOutputType without action
   */
  export type IndicatoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndicatoreCountOutputType
     */
    select?: IndicatoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndicatoreCountOutputType without action
   */
  export type IndicatoreCountOutputTypeCountMateria_IndicatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_IndicatoreWhereInput
  }


  /**
   * Count Type ICFCountOutputType
   */

  export type ICFCountOutputType = {
    Documenti_ICF: number
  }

  export type ICFCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documenti_ICF?: boolean | ICFCountOutputTypeCountDocumenti_ICFArgs
  }

  // Custom InputTypes
  /**
   * ICFCountOutputType without action
   */
  export type ICFCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICFCountOutputType
     */
    select?: ICFCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ICFCountOutputType without action
   */
  export type ICFCountOutputTypeCountDocumenti_ICFArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Documento_ICFWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteMinAggregateOutputType = {
    Email: string | null
    Nome: string | null
    Cognome: string | null
  }

  export type DocenteMaxAggregateOutputType = {
    Email: string | null
    Nome: string | null
    Cognome: string | null
  }

  export type DocenteCountAggregateOutputType = {
    Email: number
    Nome: number
    Cognome: number
    _all: number
  }


  export type DocenteMinAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
  }

  export type DocenteMaxAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
  }

  export type DocenteCountAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    Email: string
    Nome: string
    Cognome: string
    _count: DocenteCountAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
    Insegnamenti?: boolean | Docente$InsegnamentiArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
  }

  export type DocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Email" | "Nome" | "Cognome", ExtArgs["result"]["docente"]>
  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | Docente$InsegnamentiArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      Insegnamenti: Prisma.$InsegnamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Email: string
      Nome: string
      Cognome: string
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }

  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteFindUniqueArgs>(args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteFindFirstArgs>(args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `Email`
     * const docenteWithEmailOnly = await prisma.docente.findMany({ select: { Email: true } })
     * 
     */
    findMany<T extends DocenteFindManyArgs>(args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
     */
    create<T extends DocenteCreateArgs>(args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docentes.
     * @param {DocenteCreateManyArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCreateManyArgs>(args?: SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docentes and returns the data saved in the database.
     * @param {DocenteCreateManyAndReturnArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docentes and only return the `Email`
     * const docenteWithEmailOnly = await prisma.docente.createManyAndReturn({
     *   select: { Email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
     */
    delete<T extends DocenteDeleteArgs>(args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteUpdateArgs>(args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteDeleteManyArgs>(args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteUpdateManyArgs>(args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes and returns the data updated in the database.
     * @param {DocenteUpdateManyAndReturnArgs} args - Arguments to update many Docentes.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docentes and only return the `Email`
     * const docenteWithEmailOnly = await prisma.docente.updateManyAndReturn({
     *   select: { Email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
     */
    upsert<T extends DocenteUpsertArgs>(args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Insegnamenti<T extends Docente$InsegnamentiArgs<ExtArgs> = {}>(args?: Subset<T, Docente$InsegnamentiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Docente model
   */
  interface DocenteFieldRefs {
    readonly Email: FieldRef<"Docente", 'String'>
    readonly Nome: FieldRef<"Docente", 'String'>
    readonly Cognome: FieldRef<"Docente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }

  /**
   * Docente createMany
   */
  export type DocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente createManyAndReturn
   */
  export type DocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente updateManyAndReturn
   */
  export type DocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }

  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to delete.
     */
    limit?: number
  }

  /**
   * Docente.Insegnamenti
   */
  export type Docente$InsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    where?: InsegnamentoWhereInput
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    cursor?: InsegnamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
  }


  /**
   * Model Classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseAvgAggregateOutputType = {
    Id: number | null
    Classe: number | null
  }

  export type ClasseSumAggregateOutputType = {
    Id: number | null
    Classe: number | null
  }

  export type ClasseMinAggregateOutputType = {
    Id: number | null
    Classe: number | null
    Sezione: string | null
    Indirizzo: string | null
    Anno_Scolastico: Date | null
  }

  export type ClasseMaxAggregateOutputType = {
    Id: number | null
    Classe: number | null
    Sezione: string | null
    Indirizzo: string | null
    Anno_Scolastico: Date | null
  }

  export type ClasseCountAggregateOutputType = {
    Id: number
    Classe: number
    Sezione: number
    Indirizzo: number
    Anno_Scolastico: number
    _all: number
  }


  export type ClasseAvgAggregateInputType = {
    Id?: true
    Classe?: true
  }

  export type ClasseSumAggregateInputType = {
    Id?: true
    Classe?: true
  }

  export type ClasseMinAggregateInputType = {
    Id?: true
    Classe?: true
    Sezione?: true
    Indirizzo?: true
    Anno_Scolastico?: true
  }

  export type ClasseMaxAggregateInputType = {
    Id?: true
    Classe?: true
    Sezione?: true
    Indirizzo?: true
    Anno_Scolastico?: true
  }

  export type ClasseCountAggregateInputType = {
    Id?: true
    Classe?: true
    Sezione?: true
    Indirizzo?: true
    Anno_Scolastico?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe to aggregate.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type ClasseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasseWhereInput
    orderBy?: ClasseOrderByWithAggregationInput | ClasseOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: ClasseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _avg?: ClasseAvgAggregateInputType
    _sum?: ClasseSumAggregateInputType
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    Id: number
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico: Date
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends ClasseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type ClasseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Classe?: boolean
    Sezione?: boolean
    Indirizzo?: boolean
    Anno_Scolastico?: boolean
    Insegnamenti?: boolean | Classe$InsegnamentiArgs<ExtArgs>
    Classi_Studente?: boolean | Classe$Classi_StudenteArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Classe?: boolean
    Sezione?: boolean
    Indirizzo?: boolean
    Anno_Scolastico?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Classe?: boolean
    Sezione?: boolean
    Indirizzo?: boolean
    Anno_Scolastico?: boolean
  }, ExtArgs["result"]["classe"]>

  export type ClasseSelectScalar = {
    Id?: boolean
    Classe?: boolean
    Sezione?: boolean
    Indirizzo?: boolean
    Anno_Scolastico?: boolean
  }

  export type ClasseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Classe" | "Sezione" | "Indirizzo" | "Anno_Scolastico", ExtArgs["result"]["classe"]>
  export type ClasseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | Classe$InsegnamentiArgs<ExtArgs>
    Classi_Studente?: boolean | Classe$Classi_StudenteArgs<ExtArgs>
    _count?: boolean | ClasseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClasseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClasseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classe"
    objects: {
      Insegnamenti: Prisma.$InsegnamentoPayload<ExtArgs>[]
      Classi_Studente: Prisma.$Classe_StudentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Classe: number
      Sezione: string
      Indirizzo: string
      Anno_Scolastico: Date
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type ClasseGetPayload<S extends boolean | null | undefined | ClasseDefaultArgs> = $Result.GetResult<Prisma.$ClassePayload, S>

  type ClasseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface ClasseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classe'], meta: { name: 'Classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {ClasseFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasseFindUniqueArgs>(args: SelectSubset<T, ClasseFindUniqueArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasseFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasseFindFirstArgs>(args?: SelectSubset<T, ClasseFindFirstArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const classeWithIdOnly = await prisma.classe.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ClasseFindManyArgs>(args?: SelectSubset<T, ClasseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {ClasseCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends ClasseCreateArgs>(args: SelectSubset<T, ClasseCreateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClasseCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasseCreateManyArgs>(args?: SelectSubset<T, ClasseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClasseCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `Id`
     * const classeWithIdOnly = await prisma.classe.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClasseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClasseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe.
     * @param {ClasseDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends ClasseDeleteArgs>(args: SelectSubset<T, ClasseDeleteArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {ClasseUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasseUpdateArgs>(args: SelectSubset<T, ClasseUpdateArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClasseDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasseDeleteManyArgs>(args?: SelectSubset<T, ClasseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasseUpdateManyArgs>(args: SelectSubset<T, ClasseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClasseUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `Id`
     * const classeWithIdOnly = await prisma.classe.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClasseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClasseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe.
     * @param {ClasseUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends ClasseUpsertArgs>(args: SelectSubset<T, ClasseUpsertArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClasseCountArgs>(
      args?: Subset<T, ClasseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClasseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasseGroupByArgs['orderBy'] }
        : { orderBy?: ClasseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClasseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classe model
   */
  readonly fields: ClasseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Insegnamenti<T extends Classe$InsegnamentiArgs<ExtArgs> = {}>(args?: Subset<T, Classe$InsegnamentiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Classi_Studente<T extends Classe$Classi_StudenteArgs<ExtArgs> = {}>(args?: Subset<T, Classe$Classi_StudenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classe model
   */
  interface ClasseFieldRefs {
    readonly Id: FieldRef<"Classe", 'Int'>
    readonly Classe: FieldRef<"Classe", 'Int'>
    readonly Sezione: FieldRef<"Classe", 'String'>
    readonly Indirizzo: FieldRef<"Classe", 'String'>
    readonly Anno_Scolastico: FieldRef<"Classe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classe findUnique
   */
  export type ClasseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findUniqueOrThrow
   */
  export type ClasseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe findFirst
   */
  export type ClasseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findFirstOrThrow
   */
  export type ClasseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classe to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe findMany
   */
  export type ClasseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClasseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClasseOrderByWithRelationInput | ClasseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClasseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * Classe create
   */
  export type ClasseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to create a Classe.
     */
    data: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
  }

  /**
   * Classe createMany
   */
  export type ClasseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe createManyAndReturn
   */
  export type ClasseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClasseCreateManyInput | ClasseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe update
   */
  export type ClasseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The data needed to update a Classe.
     */
    data: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
    /**
     * Choose, which Classe to update.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe updateMany
   */
  export type ClasseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe updateManyAndReturn
   */
  export type ClasseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClasseUpdateManyMutationInput, ClasseUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Classe upsert
   */
  export type ClasseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * The filter to search for the Classe to update in case it exists.
     */
    where: ClasseWhereUniqueInput
    /**
     * In case the Classe found by the `where` argument doesn't exist, create a new Classe with this data.
     */
    create: XOR<ClasseCreateInput, ClasseUncheckedCreateInput>
    /**
     * In case the Classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasseUpdateInput, ClasseUncheckedUpdateInput>
  }

  /**
   * Classe delete
   */
  export type ClasseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
    /**
     * Filter which Classe to delete.
     */
    where: ClasseWhereUniqueInput
  }

  /**
   * Classe deleteMany
   */
  export type ClasseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClasseWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Classe.Insegnamenti
   */
  export type Classe$InsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    where?: InsegnamentoWhereInput
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    cursor?: InsegnamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Classe.Classi_Studente
   */
  export type Classe$Classi_StudenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    where?: Classe_StudenteWhereInput
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    cursor?: Classe_StudenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Classe_StudenteScalarFieldEnum | Classe_StudenteScalarFieldEnum[]
  }

  /**
   * Classe without action
   */
  export type ClasseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe
     */
    select?: ClasseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe
     */
    omit?: ClasseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasseInclude<ExtArgs> | null
  }


  /**
   * Model Studente
   */

  export type AggregateStudente = {
    _count: StudenteCountAggregateOutputType | null
    _min: StudenteMinAggregateOutputType | null
    _max: StudenteMaxAggregateOutputType | null
  }

  export type StudenteMinAggregateOutputType = {
    Email: string | null
    Nome: string | null
    Cognome: string | null
    DSA_BES: boolean | null
  }

  export type StudenteMaxAggregateOutputType = {
    Email: string | null
    Nome: string | null
    Cognome: string | null
    DSA_BES: boolean | null
  }

  export type StudenteCountAggregateOutputType = {
    Email: number
    Nome: number
    Cognome: number
    DSA_BES: number
    _all: number
  }


  export type StudenteMinAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
    DSA_BES?: true
  }

  export type StudenteMaxAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
    DSA_BES?: true
  }

  export type StudenteCountAggregateInputType = {
    Email?: true
    Nome?: true
    Cognome?: true
    DSA_BES?: true
    _all?: true
  }

  export type StudenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studente to aggregate.
     */
    where?: StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studentes to fetch.
     */
    orderBy?: StudenteOrderByWithRelationInput | StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studentes
    **/
    _count?: true | StudenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudenteMaxAggregateInputType
  }

  export type GetStudenteAggregateType<T extends StudenteAggregateArgs> = {
        [P in keyof T & keyof AggregateStudente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudente[P]>
      : GetScalarType<T[P], AggregateStudente[P]>
  }




  export type StudenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudenteWhereInput
    orderBy?: StudenteOrderByWithAggregationInput | StudenteOrderByWithAggregationInput[]
    by: StudenteScalarFieldEnum[] | StudenteScalarFieldEnum
    having?: StudenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudenteCountAggregateInputType | true
    _min?: StudenteMinAggregateInputType
    _max?: StudenteMaxAggregateInputType
  }

  export type StudenteGroupByOutputType = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    _count: StudenteCountAggregateOutputType | null
    _min: StudenteMinAggregateOutputType | null
    _max: StudenteMaxAggregateOutputType | null
  }

  type GetStudenteGroupByPayload<T extends StudenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudenteGroupByOutputType[P]>
            : GetScalarType<T[P], StudenteGroupByOutputType[P]>
        }
      >
    >


  export type StudenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
    DSA_BES?: boolean
    Documento?: boolean | Studente$DocumentoArgs<ExtArgs>
    Classi_Studente?: boolean | Studente$Classi_StudenteArgs<ExtArgs>
    _count?: boolean | StudenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studente"]>

  export type StudenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
    DSA_BES?: boolean
  }, ExtArgs["result"]["studente"]>

  export type StudenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
    DSA_BES?: boolean
  }, ExtArgs["result"]["studente"]>

  export type StudenteSelectScalar = {
    Email?: boolean
    Nome?: boolean
    Cognome?: boolean
    DSA_BES?: boolean
  }

  export type StudenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Email" | "Nome" | "Cognome" | "DSA_BES", ExtArgs["result"]["studente"]>
  export type StudenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documento?: boolean | Studente$DocumentoArgs<ExtArgs>
    Classi_Studente?: boolean | Studente$Classi_StudenteArgs<ExtArgs>
    _count?: boolean | StudenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Studente"
    objects: {
      Documento: Prisma.$DocumentoPayload<ExtArgs>[]
      Classi_Studente: Prisma.$Classe_StudentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Email: string
      Nome: string
      Cognome: string
      DSA_BES: boolean
    }, ExtArgs["result"]["studente"]>
    composites: {}
  }

  type StudenteGetPayload<S extends boolean | null | undefined | StudenteDefaultArgs> = $Result.GetResult<Prisma.$StudentePayload, S>

  type StudenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudenteCountAggregateInputType | true
    }

  export interface StudenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Studente'], meta: { name: 'Studente' } }
    /**
     * Find zero or one Studente that matches the filter.
     * @param {StudenteFindUniqueArgs} args - Arguments to find a Studente
     * @example
     * // Get one Studente
     * const studente = await prisma.studente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudenteFindUniqueArgs>(args: SelectSubset<T, StudenteFindUniqueArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Studente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudenteFindUniqueOrThrowArgs} args - Arguments to find a Studente
     * @example
     * // Get one Studente
     * const studente = await prisma.studente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudenteFindUniqueOrThrowArgs>(args: SelectSubset<T, StudenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteFindFirstArgs} args - Arguments to find a Studente
     * @example
     * // Get one Studente
     * const studente = await prisma.studente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudenteFindFirstArgs>(args?: SelectSubset<T, StudenteFindFirstArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteFindFirstOrThrowArgs} args - Arguments to find a Studente
     * @example
     * // Get one Studente
     * const studente = await prisma.studente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudenteFindFirstOrThrowArgs>(args?: SelectSubset<T, StudenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studentes
     * const studentes = await prisma.studente.findMany()
     * 
     * // Get first 10 Studentes
     * const studentes = await prisma.studente.findMany({ take: 10 })
     * 
     * // Only select the `Email`
     * const studenteWithEmailOnly = await prisma.studente.findMany({ select: { Email: true } })
     * 
     */
    findMany<T extends StudenteFindManyArgs>(args?: SelectSubset<T, StudenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Studente.
     * @param {StudenteCreateArgs} args - Arguments to create a Studente.
     * @example
     * // Create one Studente
     * const Studente = await prisma.studente.create({
     *   data: {
     *     // ... data to create a Studente
     *   }
     * })
     * 
     */
    create<T extends StudenteCreateArgs>(args: SelectSubset<T, StudenteCreateArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studentes.
     * @param {StudenteCreateManyArgs} args - Arguments to create many Studentes.
     * @example
     * // Create many Studentes
     * const studente = await prisma.studente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudenteCreateManyArgs>(args?: SelectSubset<T, StudenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studentes and returns the data saved in the database.
     * @param {StudenteCreateManyAndReturnArgs} args - Arguments to create many Studentes.
     * @example
     * // Create many Studentes
     * const studente = await prisma.studente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studentes and only return the `Email`
     * const studenteWithEmailOnly = await prisma.studente.createManyAndReturn({
     *   select: { Email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudenteCreateManyAndReturnArgs>(args?: SelectSubset<T, StudenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Studente.
     * @param {StudenteDeleteArgs} args - Arguments to delete one Studente.
     * @example
     * // Delete one Studente
     * const Studente = await prisma.studente.delete({
     *   where: {
     *     // ... filter to delete one Studente
     *   }
     * })
     * 
     */
    delete<T extends StudenteDeleteArgs>(args: SelectSubset<T, StudenteDeleteArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Studente.
     * @param {StudenteUpdateArgs} args - Arguments to update one Studente.
     * @example
     * // Update one Studente
     * const studente = await prisma.studente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudenteUpdateArgs>(args: SelectSubset<T, StudenteUpdateArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studentes.
     * @param {StudenteDeleteManyArgs} args - Arguments to filter Studentes to delete.
     * @example
     * // Delete a few Studentes
     * const { count } = await prisma.studente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudenteDeleteManyArgs>(args?: SelectSubset<T, StudenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studentes
     * const studente = await prisma.studente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudenteUpdateManyArgs>(args: SelectSubset<T, StudenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studentes and returns the data updated in the database.
     * @param {StudenteUpdateManyAndReturnArgs} args - Arguments to update many Studentes.
     * @example
     * // Update many Studentes
     * const studente = await prisma.studente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studentes and only return the `Email`
     * const studenteWithEmailOnly = await prisma.studente.updateManyAndReturn({
     *   select: { Email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudenteUpdateManyAndReturnArgs>(args: SelectSubset<T, StudenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Studente.
     * @param {StudenteUpsertArgs} args - Arguments to update or create a Studente.
     * @example
     * // Update or create a Studente
     * const studente = await prisma.studente.upsert({
     *   create: {
     *     // ... data to create a Studente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studente we want to update
     *   }
     * })
     */
    upsert<T extends StudenteUpsertArgs>(args: SelectSubset<T, StudenteUpsertArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteCountArgs} args - Arguments to filter Studentes to count.
     * @example
     * // Count the number of Studentes
     * const count = await prisma.studente.count({
     *   where: {
     *     // ... the filter for the Studentes we want to count
     *   }
     * })
    **/
    count<T extends StudenteCountArgs>(
      args?: Subset<T, StudenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudenteAggregateArgs>(args: Subset<T, StudenteAggregateArgs>): Prisma.PrismaPromise<GetStudenteAggregateType<T>>

    /**
     * Group by Studente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudenteGroupByArgs['orderBy'] }
        : { orderBy?: StudenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Studente model
   */
  readonly fields: StudenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Studente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documento<T extends Studente$DocumentoArgs<ExtArgs> = {}>(args?: Subset<T, Studente$DocumentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Classi_Studente<T extends Studente$Classi_StudenteArgs<ExtArgs> = {}>(args?: Subset<T, Studente$Classi_StudenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Studente model
   */
  interface StudenteFieldRefs {
    readonly Email: FieldRef<"Studente", 'String'>
    readonly Nome: FieldRef<"Studente", 'String'>
    readonly Cognome: FieldRef<"Studente", 'String'>
    readonly DSA_BES: FieldRef<"Studente", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Studente findUnique
   */
  export type StudenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Studente to fetch.
     */
    where: StudenteWhereUniqueInput
  }

  /**
   * Studente findUniqueOrThrow
   */
  export type StudenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Studente to fetch.
     */
    where: StudenteWhereUniqueInput
  }

  /**
   * Studente findFirst
   */
  export type StudenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Studente to fetch.
     */
    where?: StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studentes to fetch.
     */
    orderBy?: StudenteOrderByWithRelationInput | StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studentes.
     */
    cursor?: StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studentes.
     */
    distinct?: StudenteScalarFieldEnum | StudenteScalarFieldEnum[]
  }

  /**
   * Studente findFirstOrThrow
   */
  export type StudenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Studente to fetch.
     */
    where?: StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studentes to fetch.
     */
    orderBy?: StudenteOrderByWithRelationInput | StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studentes.
     */
    cursor?: StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studentes.
     */
    distinct?: StudenteScalarFieldEnum | StudenteScalarFieldEnum[]
  }

  /**
   * Studente findMany
   */
  export type StudenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Studentes to fetch.
     */
    where?: StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studentes to fetch.
     */
    orderBy?: StudenteOrderByWithRelationInput | StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studentes.
     */
    cursor?: StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studentes.
     */
    skip?: number
    distinct?: StudenteScalarFieldEnum | StudenteScalarFieldEnum[]
  }

  /**
   * Studente create
   */
  export type StudenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Studente.
     */
    data: XOR<StudenteCreateInput, StudenteUncheckedCreateInput>
  }

  /**
   * Studente createMany
   */
  export type StudenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studentes.
     */
    data: StudenteCreateManyInput | StudenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studente createManyAndReturn
   */
  export type StudenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * The data used to create many Studentes.
     */
    data: StudenteCreateManyInput | StudenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studente update
   */
  export type StudenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Studente.
     */
    data: XOR<StudenteUpdateInput, StudenteUncheckedUpdateInput>
    /**
     * Choose, which Studente to update.
     */
    where: StudenteWhereUniqueInput
  }

  /**
   * Studente updateMany
   */
  export type StudenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studentes.
     */
    data: XOR<StudenteUpdateManyMutationInput, StudenteUncheckedUpdateManyInput>
    /**
     * Filter which Studentes to update
     */
    where?: StudenteWhereInput
    /**
     * Limit how many Studentes to update.
     */
    limit?: number
  }

  /**
   * Studente updateManyAndReturn
   */
  export type StudenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * The data used to update Studentes.
     */
    data: XOR<StudenteUpdateManyMutationInput, StudenteUncheckedUpdateManyInput>
    /**
     * Filter which Studentes to update
     */
    where?: StudenteWhereInput
    /**
     * Limit how many Studentes to update.
     */
    limit?: number
  }

  /**
   * Studente upsert
   */
  export type StudenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Studente to update in case it exists.
     */
    where: StudenteWhereUniqueInput
    /**
     * In case the Studente found by the `where` argument doesn't exist, create a new Studente with this data.
     */
    create: XOR<StudenteCreateInput, StudenteUncheckedCreateInput>
    /**
     * In case the Studente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudenteUpdateInput, StudenteUncheckedUpdateInput>
  }

  /**
   * Studente delete
   */
  export type StudenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
    /**
     * Filter which Studente to delete.
     */
    where: StudenteWhereUniqueInput
  }

  /**
   * Studente deleteMany
   */
  export type StudenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studentes to delete
     */
    where?: StudenteWhereInput
    /**
     * Limit how many Studentes to delete.
     */
    limit?: number
  }

  /**
   * Studente.Documento
   */
  export type Studente$DocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    cursor?: DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Studente.Classi_Studente
   */
  export type Studente$Classi_StudenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    where?: Classe_StudenteWhereInput
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    cursor?: Classe_StudenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Classe_StudenteScalarFieldEnum | Classe_StudenteScalarFieldEnum[]
  }

  /**
   * Studente without action
   */
  export type StudenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studente
     */
    select?: StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studente
     */
    omit?: StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudenteInclude<ExtArgs> | null
  }


  /**
   * Model Documento
   */

  export type AggregateDocumento = {
    _count: DocumentoCountAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  export type DocumentoMinAggregateOutputType = {
    Studente_Email: string | null
    Anno: Date | null
    Stato: $Enums.Stato | null
    Tipologia: $Enums.Tipologia_Doc | null
    Data_Approvazione: Date | null
  }

  export type DocumentoMaxAggregateOutputType = {
    Studente_Email: string | null
    Anno: Date | null
    Stato: $Enums.Stato | null
    Tipologia: $Enums.Tipologia_Doc | null
    Data_Approvazione: Date | null
  }

  export type DocumentoCountAggregateOutputType = {
    Studente_Email: number
    Anno: number
    Stato: number
    Tipologia: number
    Data_Approvazione: number
    _all: number
  }


  export type DocumentoMinAggregateInputType = {
    Studente_Email?: true
    Anno?: true
    Stato?: true
    Tipologia?: true
    Data_Approvazione?: true
  }

  export type DocumentoMaxAggregateInputType = {
    Studente_Email?: true
    Anno?: true
    Stato?: true
    Tipologia?: true
    Data_Approvazione?: true
  }

  export type DocumentoCountAggregateInputType = {
    Studente_Email?: true
    Anno?: true
    Stato?: true
    Tipologia?: true
    Data_Approvazione?: true
    _all?: true
  }

  export type DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento to aggregate.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentos
    **/
    _count?: true | DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoMaxAggregateInputType
  }

  export type GetDocumentoAggregateType<T extends DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento[P]>
      : GetScalarType<T[P], AggregateDocumento[P]>
  }




  export type DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoWhereInput
    orderBy?: DocumentoOrderByWithAggregationInput | DocumentoOrderByWithAggregationInput[]
    by: DocumentoScalarFieldEnum[] | DocumentoScalarFieldEnum
    having?: DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoCountAggregateInputType | true
    _min?: DocumentoMinAggregateInputType
    _max?: DocumentoMaxAggregateInputType
  }

  export type DocumentoGroupByOutputType = {
    Studente_Email: string
    Anno: Date
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione: Date | null
    _count: DocumentoCountAggregateOutputType | null
    _min: DocumentoMinAggregateOutputType | null
    _max: DocumentoMaxAggregateOutputType | null
  }

  type GetDocumentoGroupByPayload<T extends DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Studente_Email?: boolean
    Anno?: boolean
    Stato?: boolean
    Tipologia?: boolean
    Data_Approvazione?: boolean
    Materie_Documento?: boolean | Documento$Materie_DocumentoArgs<ExtArgs>
    Documento_ICFs?: boolean | Documento$Documento_ICFsArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
    Allegati?: boolean | Documento$AllegatiArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Studente_Email?: boolean
    Anno?: boolean
    Stato?: boolean
    Tipologia?: boolean
    Data_Approvazione?: boolean
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Studente_Email?: boolean
    Anno?: boolean
    Stato?: boolean
    Tipologia?: boolean
    Data_Approvazione?: boolean
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento"]>

  export type DocumentoSelectScalar = {
    Studente_Email?: boolean
    Anno?: boolean
    Stato?: boolean
    Tipologia?: boolean
    Data_Approvazione?: boolean
  }

  export type DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Studente_Email" | "Anno" | "Stato" | "Tipologia" | "Data_Approvazione", ExtArgs["result"]["documento"]>
  export type DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materie_Documento?: boolean | Documento$Materie_DocumentoArgs<ExtArgs>
    Documento_ICFs?: boolean | Documento$Documento_ICFsArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
    Allegati?: boolean | Documento$AllegatiArgs<ExtArgs>
    _count?: boolean | DocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }
  export type DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }

  export type $DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento"
    objects: {
      Materie_Documento: Prisma.$Materia_DocumentoPayload<ExtArgs>[]
      Documento_ICFs: Prisma.$Documento_ICFPayload<ExtArgs>[]
      Studente: Prisma.$StudentePayload<ExtArgs>
      Allegati: Prisma.$AllegatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Studente_Email: string
      Anno: Date
      Stato: $Enums.Stato
      Tipologia: $Enums.Tipologia_Doc
      Data_Approvazione: Date | null
    }, ExtArgs["result"]["documento"]>
    composites: {}
  }

  type DocumentoGetPayload<S extends boolean | null | undefined | DocumentoDefaultArgs> = $Result.GetResult<Prisma.$DocumentoPayload, S>

  type DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoCountAggregateInputType | true
    }

  export interface DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento'], meta: { name: 'Documento' } }
    /**
     * Find zero or one Documento that matches the filter.
     * @param {DocumentoFindUniqueArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoFindUniqueArgs>(args: SelectSubset<T, DocumentoFindUniqueArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoFindFirstArgs>(args?: SelectSubset<T, DocumentoFindFirstArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindFirstOrThrowArgs} args - Arguments to find a Documento
     * @example
     * // Get one Documento
     * const documento = await prisma.documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentos
     * const documentos = await prisma.documento.findMany()
     * 
     * // Get first 10 Documentos
     * const documentos = await prisma.documento.findMany({ take: 10 })
     * 
     * // Only select the `Studente_Email`
     * const documentoWithStudente_EmailOnly = await prisma.documento.findMany({ select: { Studente_Email: true } })
     * 
     */
    findMany<T extends DocumentoFindManyArgs>(args?: SelectSubset<T, DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento.
     * @param {DocumentoCreateArgs} args - Arguments to create a Documento.
     * @example
     * // Create one Documento
     * const Documento = await prisma.documento.create({
     *   data: {
     *     // ... data to create a Documento
     *   }
     * })
     * 
     */
    create<T extends DocumentoCreateArgs>(args: SelectSubset<T, DocumentoCreateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentos.
     * @param {DocumentoCreateManyArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoCreateManyArgs>(args?: SelectSubset<T, DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentos and returns the data saved in the database.
     * @param {DocumentoCreateManyAndReturnArgs} args - Arguments to create many Documentos.
     * @example
     * // Create many Documentos
     * const documento = await prisma.documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentos and only return the `Studente_Email`
     * const documentoWithStudente_EmailOnly = await prisma.documento.createManyAndReturn({
     *   select: { Studente_Email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento.
     * @param {DocumentoDeleteArgs} args - Arguments to delete one Documento.
     * @example
     * // Delete one Documento
     * const Documento = await prisma.documento.delete({
     *   where: {
     *     // ... filter to delete one Documento
     *   }
     * })
     * 
     */
    delete<T extends DocumentoDeleteArgs>(args: SelectSubset<T, DocumentoDeleteArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento.
     * @param {DocumentoUpdateArgs} args - Arguments to update one Documento.
     * @example
     * // Update one Documento
     * const documento = await prisma.documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoUpdateArgs>(args: SelectSubset<T, DocumentoUpdateArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentos.
     * @param {DocumentoDeleteManyArgs} args - Arguments to filter Documentos to delete.
     * @example
     * // Delete a few Documentos
     * const { count } = await prisma.documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoDeleteManyArgs>(args?: SelectSubset<T, DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoUpdateManyArgs>(args: SelectSubset<T, DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentos and returns the data updated in the database.
     * @param {DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Documentos.
     * @example
     * // Update many Documentos
     * const documento = await prisma.documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentos and only return the `Studente_Email`
     * const documentoWithStudente_EmailOnly = await prisma.documento.updateManyAndReturn({
     *   select: { Studente_Email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento.
     * @param {DocumentoUpsertArgs} args - Arguments to update or create a Documento.
     * @example
     * // Update or create a Documento
     * const documento = await prisma.documento.upsert({
     *   create: {
     *     // ... data to create a Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoUpsertArgs>(args: SelectSubset<T, DocumentoUpsertArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoCountArgs} args - Arguments to filter Documentos to count.
     * @example
     * // Count the number of Documentos
     * const count = await prisma.documento.count({
     *   where: {
     *     // ... the filter for the Documentos we want to count
     *   }
     * })
    **/
    count<T extends DocumentoCountArgs>(
      args?: Subset<T, DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoAggregateArgs>(args: Subset<T, DocumentoAggregateArgs>): Prisma.PrismaPromise<GetDocumentoAggregateType<T>>

    /**
     * Group by Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento model
   */
  readonly fields: DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materie_Documento<T extends Documento$Materie_DocumentoArgs<ExtArgs> = {}>(args?: Subset<T, Documento$Materie_DocumentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Documento_ICFs<T extends Documento$Documento_ICFsArgs<ExtArgs> = {}>(args?: Subset<T, Documento$Documento_ICFsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Studente<T extends StudenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudenteDefaultArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Allegati<T extends Documento$AllegatiArgs<ExtArgs> = {}>(args?: Subset<T, Documento$AllegatiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documento model
   */
  interface DocumentoFieldRefs {
    readonly Studente_Email: FieldRef<"Documento", 'String'>
    readonly Anno: FieldRef<"Documento", 'DateTime'>
    readonly Stato: FieldRef<"Documento", 'Stato'>
    readonly Tipologia: FieldRef<"Documento", 'Tipologia_Doc'>
    readonly Data_Approvazione: FieldRef<"Documento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documento findUnique
   */
  export type DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findUniqueOrThrow
   */
  export type DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento findFirst
   */
  export type DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findFirstOrThrow
   */
  export type DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documento to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentos.
     */
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento findMany
   */
  export type DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Documentos to fetch.
     */
    where?: DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentos to fetch.
     */
    orderBy?: DocumentoOrderByWithRelationInput | DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentos.
     */
    cursor?: DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentos.
     */
    skip?: number
    distinct?: DocumentoScalarFieldEnum | DocumentoScalarFieldEnum[]
  }

  /**
   * Documento create
   */
  export type DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento.
     */
    data: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
  }

  /**
   * Documento createMany
   */
  export type DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento createManyAndReturn
   */
  export type DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Documentos.
     */
    data: DocumentoCreateManyInput | DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento update
   */
  export type DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento.
     */
    data: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Documento to update.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento updateMany
   */
  export type DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
  }

  /**
   * Documento updateManyAndReturn
   */
  export type DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Documentos.
     */
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Documentos to update
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento upsert
   */
  export type DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento to update in case it exists.
     */
    where: DocumentoWhereUniqueInput
    /**
     * In case the Documento found by the `where` argument doesn't exist, create a new Documento with this data.
     */
    create: XOR<DocumentoCreateInput, DocumentoUncheckedCreateInput>
    /**
     * In case the Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoUpdateInput, DocumentoUncheckedUpdateInput>
  }

  /**
   * Documento delete
   */
  export type DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Documento to delete.
     */
    where: DocumentoWhereUniqueInput
  }

  /**
   * Documento deleteMany
   */
  export type DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentos to delete
     */
    where?: DocumentoWhereInput
    /**
     * Limit how many Documentos to delete.
     */
    limit?: number
  }

  /**
   * Documento.Materie_Documento
   */
  export type Documento$Materie_DocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    where?: Materia_DocumentoWhereInput
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    cursor?: Materia_DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materia_DocumentoScalarFieldEnum | Materia_DocumentoScalarFieldEnum[]
  }

  /**
   * Documento.Documento_ICFs
   */
  export type Documento$Documento_ICFsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    where?: Documento_ICFWhereInput
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    cursor?: Documento_ICFWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Documento_ICFScalarFieldEnum | Documento_ICFScalarFieldEnum[]
  }

  /**
   * Documento.Allegati
   */
  export type Documento$AllegatiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    where?: AllegatoWhereInput
    orderBy?: AllegatoOrderByWithRelationInput | AllegatoOrderByWithRelationInput[]
    cursor?: AllegatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllegatoScalarFieldEnum | AllegatoScalarFieldEnum[]
  }

  /**
   * Documento without action
   */
  export type DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento
     */
    select?: DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento
     */
    omit?: DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaMinAggregateOutputType = {
    Nome: string | null
  }

  export type MateriaMaxAggregateOutputType = {
    Nome: string | null
  }

  export type MateriaCountAggregateOutputType = {
    Nome: number
    _all: number
  }


  export type MateriaMinAggregateInputType = {
    Nome?: true
  }

  export type MateriaMaxAggregateInputType = {
    Nome?: true
  }

  export type MateriaCountAggregateInputType = {
    Nome?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    Nome: string
    _count: MateriaCountAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nome?: boolean
    Insegnamenti?: boolean | Materia$InsegnamentiArgs<ExtArgs>
    Materie_Indicatore?: boolean | Materia$Materie_IndicatoreArgs<ExtArgs>
    Materie_Documento?: boolean | Materia$Materie_DocumentoArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nome?: boolean
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Nome?: boolean
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    Nome?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Nome", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Insegnamenti?: boolean | Materia$InsegnamentiArgs<ExtArgs>
    Materie_Indicatore?: boolean | Materia$Materie_IndicatoreArgs<ExtArgs>
    Materie_Documento?: boolean | Materia$Materie_DocumentoArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      Insegnamenti: Prisma.$InsegnamentoPayload<ExtArgs>[]
      Materie_Indicatore: Prisma.$Materia_IndicatorePayload<ExtArgs>[]
      Materie_Documento: Prisma.$Materia_DocumentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Nome: string
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `Nome`
     * const materiaWithNomeOnly = await prisma.materia.findMany({ select: { Nome: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `Nome`
     * const materiaWithNomeOnly = await prisma.materia.createManyAndReturn({
     *   select: { Nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `Nome`
     * const materiaWithNomeOnly = await prisma.materia.updateManyAndReturn({
     *   select: { Nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Insegnamenti<T extends Materia$InsegnamentiArgs<ExtArgs> = {}>(args?: Subset<T, Materia$InsegnamentiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Materie_Indicatore<T extends Materia$Materie_IndicatoreArgs<ExtArgs> = {}>(args?: Subset<T, Materia$Materie_IndicatoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Materie_Documento<T extends Materia$Materie_DocumentoArgs<ExtArgs> = {}>(args?: Subset<T, Materia$Materie_DocumentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly Nome: FieldRef<"Materia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.Insegnamenti
   */
  export type Materia$InsegnamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    where?: InsegnamentoWhereInput
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    cursor?: InsegnamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Materia.Materie_Indicatore
   */
  export type Materia$Materie_IndicatoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    where?: Materia_IndicatoreWhereInput
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    cursor?: Materia_IndicatoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materia_IndicatoreScalarFieldEnum | Materia_IndicatoreScalarFieldEnum[]
  }

  /**
   * Materia.Materie_Documento
   */
  export type Materia$Materie_DocumentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    where?: Materia_DocumentoWhereInput
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    cursor?: Materia_DocumentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materia_DocumentoScalarFieldEnum | Materia_DocumentoScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Indicatore
   */

  export type AggregateIndicatore = {
    _count: IndicatoreCountAggregateOutputType | null
    _avg: IndicatoreAvgAggregateOutputType | null
    _sum: IndicatoreSumAggregateOutputType | null
    _min: IndicatoreMinAggregateOutputType | null
    _max: IndicatoreMaxAggregateOutputType | null
  }

  export type IndicatoreAvgAggregateOutputType = {
    Id: number | null
  }

  export type IndicatoreSumAggregateOutputType = {
    Id: number | null
  }

  export type IndicatoreMinAggregateOutputType = {
    Id: number | null
    Tipologia: $Enums.Tipologia_Ind | null
    Categoria: $Enums.Categoria | null
    Descrizione: string | null
  }

  export type IndicatoreMaxAggregateOutputType = {
    Id: number | null
    Tipologia: $Enums.Tipologia_Ind | null
    Categoria: $Enums.Categoria | null
    Descrizione: string | null
  }

  export type IndicatoreCountAggregateOutputType = {
    Id: number
    Tipologia: number
    Categoria: number
    Descrizione: number
    _all: number
  }


  export type IndicatoreAvgAggregateInputType = {
    Id?: true
  }

  export type IndicatoreSumAggregateInputType = {
    Id?: true
  }

  export type IndicatoreMinAggregateInputType = {
    Id?: true
    Tipologia?: true
    Categoria?: true
    Descrizione?: true
  }

  export type IndicatoreMaxAggregateInputType = {
    Id?: true
    Tipologia?: true
    Categoria?: true
    Descrizione?: true
  }

  export type IndicatoreCountAggregateInputType = {
    Id?: true
    Tipologia?: true
    Categoria?: true
    Descrizione?: true
    _all?: true
  }

  export type IndicatoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicatore to aggregate.
     */
    where?: IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicatores to fetch.
     */
    orderBy?: IndicatoreOrderByWithRelationInput | IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Indicatores
    **/
    _count?: true | IndicatoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndicatoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndicatoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndicatoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndicatoreMaxAggregateInputType
  }

  export type GetIndicatoreAggregateType<T extends IndicatoreAggregateArgs> = {
        [P in keyof T & keyof AggregateIndicatore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndicatore[P]>
      : GetScalarType<T[P], AggregateIndicatore[P]>
  }




  export type IndicatoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndicatoreWhereInput
    orderBy?: IndicatoreOrderByWithAggregationInput | IndicatoreOrderByWithAggregationInput[]
    by: IndicatoreScalarFieldEnum[] | IndicatoreScalarFieldEnum
    having?: IndicatoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndicatoreCountAggregateInputType | true
    _avg?: IndicatoreAvgAggregateInputType
    _sum?: IndicatoreSumAggregateInputType
    _min?: IndicatoreMinAggregateInputType
    _max?: IndicatoreMaxAggregateInputType
  }

  export type IndicatoreGroupByOutputType = {
    Id: number
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
    _count: IndicatoreCountAggregateOutputType | null
    _avg: IndicatoreAvgAggregateOutputType | null
    _sum: IndicatoreSumAggregateOutputType | null
    _min: IndicatoreMinAggregateOutputType | null
    _max: IndicatoreMaxAggregateOutputType | null
  }

  type GetIndicatoreGroupByPayload<T extends IndicatoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndicatoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndicatoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndicatoreGroupByOutputType[P]>
            : GetScalarType<T[P], IndicatoreGroupByOutputType[P]>
        }
      >
    >


  export type IndicatoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Tipologia?: boolean
    Categoria?: boolean
    Descrizione?: boolean
    Materia_Indicatori?: boolean | Indicatore$Materia_IndicatoriArgs<ExtArgs>
    _count?: boolean | IndicatoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["indicatore"]>

  export type IndicatoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Tipologia?: boolean
    Categoria?: boolean
    Descrizione?: boolean
  }, ExtArgs["result"]["indicatore"]>

  export type IndicatoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Tipologia?: boolean
    Categoria?: boolean
    Descrizione?: boolean
  }, ExtArgs["result"]["indicatore"]>

  export type IndicatoreSelectScalar = {
    Id?: boolean
    Tipologia?: boolean
    Categoria?: boolean
    Descrizione?: boolean
  }

  export type IndicatoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Tipologia" | "Categoria" | "Descrizione", ExtArgs["result"]["indicatore"]>
  export type IndicatoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia_Indicatori?: boolean | Indicatore$Materia_IndicatoriArgs<ExtArgs>
    _count?: boolean | IndicatoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndicatoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndicatoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndicatorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Indicatore"
    objects: {
      Materia_Indicatori: Prisma.$Materia_IndicatorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Tipologia: $Enums.Tipologia_Ind
      Categoria: $Enums.Categoria
      Descrizione: string
    }, ExtArgs["result"]["indicatore"]>
    composites: {}
  }

  type IndicatoreGetPayload<S extends boolean | null | undefined | IndicatoreDefaultArgs> = $Result.GetResult<Prisma.$IndicatorePayload, S>

  type IndicatoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndicatoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndicatoreCountAggregateInputType | true
    }

  export interface IndicatoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Indicatore'], meta: { name: 'Indicatore' } }
    /**
     * Find zero or one Indicatore that matches the filter.
     * @param {IndicatoreFindUniqueArgs} args - Arguments to find a Indicatore
     * @example
     * // Get one Indicatore
     * const indicatore = await prisma.indicatore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndicatoreFindUniqueArgs>(args: SelectSubset<T, IndicatoreFindUniqueArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indicatore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndicatoreFindUniqueOrThrowArgs} args - Arguments to find a Indicatore
     * @example
     * // Get one Indicatore
     * const indicatore = await prisma.indicatore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndicatoreFindUniqueOrThrowArgs>(args: SelectSubset<T, IndicatoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicatore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreFindFirstArgs} args - Arguments to find a Indicatore
     * @example
     * // Get one Indicatore
     * const indicatore = await prisma.indicatore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndicatoreFindFirstArgs>(args?: SelectSubset<T, IndicatoreFindFirstArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indicatore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreFindFirstOrThrowArgs} args - Arguments to find a Indicatore
     * @example
     * // Get one Indicatore
     * const indicatore = await prisma.indicatore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndicatoreFindFirstOrThrowArgs>(args?: SelectSubset<T, IndicatoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indicatores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indicatores
     * const indicatores = await prisma.indicatore.findMany()
     * 
     * // Get first 10 Indicatores
     * const indicatores = await prisma.indicatore.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const indicatoreWithIdOnly = await prisma.indicatore.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends IndicatoreFindManyArgs>(args?: SelectSubset<T, IndicatoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indicatore.
     * @param {IndicatoreCreateArgs} args - Arguments to create a Indicatore.
     * @example
     * // Create one Indicatore
     * const Indicatore = await prisma.indicatore.create({
     *   data: {
     *     // ... data to create a Indicatore
     *   }
     * })
     * 
     */
    create<T extends IndicatoreCreateArgs>(args: SelectSubset<T, IndicatoreCreateArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indicatores.
     * @param {IndicatoreCreateManyArgs} args - Arguments to create many Indicatores.
     * @example
     * // Create many Indicatores
     * const indicatore = await prisma.indicatore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndicatoreCreateManyArgs>(args?: SelectSubset<T, IndicatoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Indicatores and returns the data saved in the database.
     * @param {IndicatoreCreateManyAndReturnArgs} args - Arguments to create many Indicatores.
     * @example
     * // Create many Indicatores
     * const indicatore = await prisma.indicatore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Indicatores and only return the `Id`
     * const indicatoreWithIdOnly = await prisma.indicatore.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndicatoreCreateManyAndReturnArgs>(args?: SelectSubset<T, IndicatoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Indicatore.
     * @param {IndicatoreDeleteArgs} args - Arguments to delete one Indicatore.
     * @example
     * // Delete one Indicatore
     * const Indicatore = await prisma.indicatore.delete({
     *   where: {
     *     // ... filter to delete one Indicatore
     *   }
     * })
     * 
     */
    delete<T extends IndicatoreDeleteArgs>(args: SelectSubset<T, IndicatoreDeleteArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indicatore.
     * @param {IndicatoreUpdateArgs} args - Arguments to update one Indicatore.
     * @example
     * // Update one Indicatore
     * const indicatore = await prisma.indicatore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndicatoreUpdateArgs>(args: SelectSubset<T, IndicatoreUpdateArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indicatores.
     * @param {IndicatoreDeleteManyArgs} args - Arguments to filter Indicatores to delete.
     * @example
     * // Delete a few Indicatores
     * const { count } = await prisma.indicatore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndicatoreDeleteManyArgs>(args?: SelectSubset<T, IndicatoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicatores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indicatores
     * const indicatore = await prisma.indicatore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndicatoreUpdateManyArgs>(args: SelectSubset<T, IndicatoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indicatores and returns the data updated in the database.
     * @param {IndicatoreUpdateManyAndReturnArgs} args - Arguments to update many Indicatores.
     * @example
     * // Update many Indicatores
     * const indicatore = await prisma.indicatore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Indicatores and only return the `Id`
     * const indicatoreWithIdOnly = await prisma.indicatore.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndicatoreUpdateManyAndReturnArgs>(args: SelectSubset<T, IndicatoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Indicatore.
     * @param {IndicatoreUpsertArgs} args - Arguments to update or create a Indicatore.
     * @example
     * // Update or create a Indicatore
     * const indicatore = await prisma.indicatore.upsert({
     *   create: {
     *     // ... data to create a Indicatore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indicatore we want to update
     *   }
     * })
     */
    upsert<T extends IndicatoreUpsertArgs>(args: SelectSubset<T, IndicatoreUpsertArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indicatores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreCountArgs} args - Arguments to filter Indicatores to count.
     * @example
     * // Count the number of Indicatores
     * const count = await prisma.indicatore.count({
     *   where: {
     *     // ... the filter for the Indicatores we want to count
     *   }
     * })
    **/
    count<T extends IndicatoreCountArgs>(
      args?: Subset<T, IndicatoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndicatoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indicatore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndicatoreAggregateArgs>(args: Subset<T, IndicatoreAggregateArgs>): Prisma.PrismaPromise<GetIndicatoreAggregateType<T>>

    /**
     * Group by Indicatore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndicatoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndicatoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndicatoreGroupByArgs['orderBy'] }
        : { orderBy?: IndicatoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndicatoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicatoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Indicatore model
   */
  readonly fields: IndicatoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Indicatore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndicatoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materia_Indicatori<T extends Indicatore$Materia_IndicatoriArgs<ExtArgs> = {}>(args?: Subset<T, Indicatore$Materia_IndicatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Indicatore model
   */
  interface IndicatoreFieldRefs {
    readonly Id: FieldRef<"Indicatore", 'Int'>
    readonly Tipologia: FieldRef<"Indicatore", 'Tipologia_Ind'>
    readonly Categoria: FieldRef<"Indicatore", 'Categoria'>
    readonly Descrizione: FieldRef<"Indicatore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Indicatore findUnique
   */
  export type IndicatoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Indicatore to fetch.
     */
    where: IndicatoreWhereUniqueInput
  }

  /**
   * Indicatore findUniqueOrThrow
   */
  export type IndicatoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Indicatore to fetch.
     */
    where: IndicatoreWhereUniqueInput
  }

  /**
   * Indicatore findFirst
   */
  export type IndicatoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Indicatore to fetch.
     */
    where?: IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicatores to fetch.
     */
    orderBy?: IndicatoreOrderByWithRelationInput | IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicatores.
     */
    cursor?: IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicatores.
     */
    distinct?: IndicatoreScalarFieldEnum | IndicatoreScalarFieldEnum[]
  }

  /**
   * Indicatore findFirstOrThrow
   */
  export type IndicatoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Indicatore to fetch.
     */
    where?: IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicatores to fetch.
     */
    orderBy?: IndicatoreOrderByWithRelationInput | IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Indicatores.
     */
    cursor?: IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Indicatores.
     */
    distinct?: IndicatoreScalarFieldEnum | IndicatoreScalarFieldEnum[]
  }

  /**
   * Indicatore findMany
   */
  export type IndicatoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Indicatores to fetch.
     */
    where?: IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Indicatores to fetch.
     */
    orderBy?: IndicatoreOrderByWithRelationInput | IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Indicatores.
     */
    cursor?: IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Indicatores.
     */
    skip?: number
    distinct?: IndicatoreScalarFieldEnum | IndicatoreScalarFieldEnum[]
  }

  /**
   * Indicatore create
   */
  export type IndicatoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Indicatore.
     */
    data: XOR<IndicatoreCreateInput, IndicatoreUncheckedCreateInput>
  }

  /**
   * Indicatore createMany
   */
  export type IndicatoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Indicatores.
     */
    data: IndicatoreCreateManyInput | IndicatoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicatore createManyAndReturn
   */
  export type IndicatoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * The data used to create many Indicatores.
     */
    data: IndicatoreCreateManyInput | IndicatoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Indicatore update
   */
  export type IndicatoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Indicatore.
     */
    data: XOR<IndicatoreUpdateInput, IndicatoreUncheckedUpdateInput>
    /**
     * Choose, which Indicatore to update.
     */
    where: IndicatoreWhereUniqueInput
  }

  /**
   * Indicatore updateMany
   */
  export type IndicatoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Indicatores.
     */
    data: XOR<IndicatoreUpdateManyMutationInput, IndicatoreUncheckedUpdateManyInput>
    /**
     * Filter which Indicatores to update
     */
    where?: IndicatoreWhereInput
    /**
     * Limit how many Indicatores to update.
     */
    limit?: number
  }

  /**
   * Indicatore updateManyAndReturn
   */
  export type IndicatoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * The data used to update Indicatores.
     */
    data: XOR<IndicatoreUpdateManyMutationInput, IndicatoreUncheckedUpdateManyInput>
    /**
     * Filter which Indicatores to update
     */
    where?: IndicatoreWhereInput
    /**
     * Limit how many Indicatores to update.
     */
    limit?: number
  }

  /**
   * Indicatore upsert
   */
  export type IndicatoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Indicatore to update in case it exists.
     */
    where: IndicatoreWhereUniqueInput
    /**
     * In case the Indicatore found by the `where` argument doesn't exist, create a new Indicatore with this data.
     */
    create: XOR<IndicatoreCreateInput, IndicatoreUncheckedCreateInput>
    /**
     * In case the Indicatore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndicatoreUpdateInput, IndicatoreUncheckedUpdateInput>
  }

  /**
   * Indicatore delete
   */
  export type IndicatoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
    /**
     * Filter which Indicatore to delete.
     */
    where: IndicatoreWhereUniqueInput
  }

  /**
   * Indicatore deleteMany
   */
  export type IndicatoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Indicatores to delete
     */
    where?: IndicatoreWhereInput
    /**
     * Limit how many Indicatores to delete.
     */
    limit?: number
  }

  /**
   * Indicatore.Materia_Indicatori
   */
  export type Indicatore$Materia_IndicatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    where?: Materia_IndicatoreWhereInput
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    cursor?: Materia_IndicatoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Materia_IndicatoreScalarFieldEnum | Materia_IndicatoreScalarFieldEnum[]
  }

  /**
   * Indicatore without action
   */
  export type IndicatoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Indicatore
     */
    select?: IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Indicatore
     */
    omit?: IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndicatoreInclude<ExtArgs> | null
  }


  /**
   * Model Allegato
   */

  export type AggregateAllegato = {
    _count: AllegatoCountAggregateOutputType | null
    _avg: AllegatoAvgAggregateOutputType | null
    _sum: AllegatoSumAggregateOutputType | null
    _min: AllegatoMinAggregateOutputType | null
    _max: AllegatoMaxAggregateOutputType | null
  }

  export type AllegatoAvgAggregateOutputType = {
    Id: number | null
  }

  export type AllegatoSumAggregateOutputType = {
    Id: number | null
  }

  export type AllegatoMinAggregateOutputType = {
    Id: number | null
    Nome: string | null
    Percorso: string | null
    Documento_Studente_Email: string | null
    Documento_Anno: Date | null
  }

  export type AllegatoMaxAggregateOutputType = {
    Id: number | null
    Nome: string | null
    Percorso: string | null
    Documento_Studente_Email: string | null
    Documento_Anno: Date | null
  }

  export type AllegatoCountAggregateOutputType = {
    Id: number
    Nome: number
    Percorso: number
    Documento_Studente_Email: number
    Documento_Anno: number
    _all: number
  }


  export type AllegatoAvgAggregateInputType = {
    Id?: true
  }

  export type AllegatoSumAggregateInputType = {
    Id?: true
  }

  export type AllegatoMinAggregateInputType = {
    Id?: true
    Nome?: true
    Percorso?: true
    Documento_Studente_Email?: true
    Documento_Anno?: true
  }

  export type AllegatoMaxAggregateInputType = {
    Id?: true
    Nome?: true
    Percorso?: true
    Documento_Studente_Email?: true
    Documento_Anno?: true
  }

  export type AllegatoCountAggregateInputType = {
    Id?: true
    Nome?: true
    Percorso?: true
    Documento_Studente_Email?: true
    Documento_Anno?: true
    _all?: true
  }

  export type AllegatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allegato to aggregate.
     */
    where?: AllegatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allegatoes to fetch.
     */
    orderBy?: AllegatoOrderByWithRelationInput | AllegatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllegatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allegatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allegatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allegatoes
    **/
    _count?: true | AllegatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllegatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllegatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllegatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllegatoMaxAggregateInputType
  }

  export type GetAllegatoAggregateType<T extends AllegatoAggregateArgs> = {
        [P in keyof T & keyof AggregateAllegato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllegato[P]>
      : GetScalarType<T[P], AggregateAllegato[P]>
  }




  export type AllegatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllegatoWhereInput
    orderBy?: AllegatoOrderByWithAggregationInput | AllegatoOrderByWithAggregationInput[]
    by: AllegatoScalarFieldEnum[] | AllegatoScalarFieldEnum
    having?: AllegatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllegatoCountAggregateInputType | true
    _avg?: AllegatoAvgAggregateInputType
    _sum?: AllegatoSumAggregateInputType
    _min?: AllegatoMinAggregateInputType
    _max?: AllegatoMaxAggregateInputType
  }

  export type AllegatoGroupByOutputType = {
    Id: number
    Nome: string
    Percorso: string
    Documento_Studente_Email: string
    Documento_Anno: Date
    _count: AllegatoCountAggregateOutputType | null
    _avg: AllegatoAvgAggregateOutputType | null
    _sum: AllegatoSumAggregateOutputType | null
    _min: AllegatoMinAggregateOutputType | null
    _max: AllegatoMaxAggregateOutputType | null
  }

  type GetAllegatoGroupByPayload<T extends AllegatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllegatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllegatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllegatoGroupByOutputType[P]>
            : GetScalarType<T[P], AllegatoGroupByOutputType[P]>
        }
      >
    >


  export type AllegatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Percorso?: boolean
    Documento_Studente_Email?: boolean
    Documento_Anno?: boolean
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allegato"]>

  export type AllegatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Percorso?: boolean
    Documento_Studente_Email?: boolean
    Documento_Anno?: boolean
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allegato"]>

  export type AllegatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Percorso?: boolean
    Documento_Studente_Email?: boolean
    Documento_Anno?: boolean
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allegato"]>

  export type AllegatoSelectScalar = {
    Id?: boolean
    Nome?: boolean
    Percorso?: boolean
    Documento_Studente_Email?: boolean
    Documento_Anno?: boolean
  }

  export type AllegatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome" | "Percorso" | "Documento_Studente_Email" | "Documento_Anno", ExtArgs["result"]["allegato"]>
  export type AllegatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type AllegatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type AllegatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }

  export type $AllegatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allegato"
    objects: {
      Documento: Prisma.$DocumentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Nome: string
      Percorso: string
      Documento_Studente_Email: string
      Documento_Anno: Date
    }, ExtArgs["result"]["allegato"]>
    composites: {}
  }

  type AllegatoGetPayload<S extends boolean | null | undefined | AllegatoDefaultArgs> = $Result.GetResult<Prisma.$AllegatoPayload, S>

  type AllegatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllegatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllegatoCountAggregateInputType | true
    }

  export interface AllegatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allegato'], meta: { name: 'Allegato' } }
    /**
     * Find zero or one Allegato that matches the filter.
     * @param {AllegatoFindUniqueArgs} args - Arguments to find a Allegato
     * @example
     * // Get one Allegato
     * const allegato = await prisma.allegato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllegatoFindUniqueArgs>(args: SelectSubset<T, AllegatoFindUniqueArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allegato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllegatoFindUniqueOrThrowArgs} args - Arguments to find a Allegato
     * @example
     * // Get one Allegato
     * const allegato = await prisma.allegato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllegatoFindUniqueOrThrowArgs>(args: SelectSubset<T, AllegatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allegato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoFindFirstArgs} args - Arguments to find a Allegato
     * @example
     * // Get one Allegato
     * const allegato = await prisma.allegato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllegatoFindFirstArgs>(args?: SelectSubset<T, AllegatoFindFirstArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allegato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoFindFirstOrThrowArgs} args - Arguments to find a Allegato
     * @example
     * // Get one Allegato
     * const allegato = await prisma.allegato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllegatoFindFirstOrThrowArgs>(args?: SelectSubset<T, AllegatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allegatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allegatoes
     * const allegatoes = await prisma.allegato.findMany()
     * 
     * // Get first 10 Allegatoes
     * const allegatoes = await prisma.allegato.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const allegatoWithIdOnly = await prisma.allegato.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AllegatoFindManyArgs>(args?: SelectSubset<T, AllegatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allegato.
     * @param {AllegatoCreateArgs} args - Arguments to create a Allegato.
     * @example
     * // Create one Allegato
     * const Allegato = await prisma.allegato.create({
     *   data: {
     *     // ... data to create a Allegato
     *   }
     * })
     * 
     */
    create<T extends AllegatoCreateArgs>(args: SelectSubset<T, AllegatoCreateArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allegatoes.
     * @param {AllegatoCreateManyArgs} args - Arguments to create many Allegatoes.
     * @example
     * // Create many Allegatoes
     * const allegato = await prisma.allegato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllegatoCreateManyArgs>(args?: SelectSubset<T, AllegatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allegatoes and returns the data saved in the database.
     * @param {AllegatoCreateManyAndReturnArgs} args - Arguments to create many Allegatoes.
     * @example
     * // Create many Allegatoes
     * const allegato = await prisma.allegato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allegatoes and only return the `Id`
     * const allegatoWithIdOnly = await prisma.allegato.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllegatoCreateManyAndReturnArgs>(args?: SelectSubset<T, AllegatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allegato.
     * @param {AllegatoDeleteArgs} args - Arguments to delete one Allegato.
     * @example
     * // Delete one Allegato
     * const Allegato = await prisma.allegato.delete({
     *   where: {
     *     // ... filter to delete one Allegato
     *   }
     * })
     * 
     */
    delete<T extends AllegatoDeleteArgs>(args: SelectSubset<T, AllegatoDeleteArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allegato.
     * @param {AllegatoUpdateArgs} args - Arguments to update one Allegato.
     * @example
     * // Update one Allegato
     * const allegato = await prisma.allegato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllegatoUpdateArgs>(args: SelectSubset<T, AllegatoUpdateArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allegatoes.
     * @param {AllegatoDeleteManyArgs} args - Arguments to filter Allegatoes to delete.
     * @example
     * // Delete a few Allegatoes
     * const { count } = await prisma.allegato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllegatoDeleteManyArgs>(args?: SelectSubset<T, AllegatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allegatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allegatoes
     * const allegato = await prisma.allegato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllegatoUpdateManyArgs>(args: SelectSubset<T, AllegatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allegatoes and returns the data updated in the database.
     * @param {AllegatoUpdateManyAndReturnArgs} args - Arguments to update many Allegatoes.
     * @example
     * // Update many Allegatoes
     * const allegato = await prisma.allegato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allegatoes and only return the `Id`
     * const allegatoWithIdOnly = await prisma.allegato.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllegatoUpdateManyAndReturnArgs>(args: SelectSubset<T, AllegatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allegato.
     * @param {AllegatoUpsertArgs} args - Arguments to update or create a Allegato.
     * @example
     * // Update or create a Allegato
     * const allegato = await prisma.allegato.upsert({
     *   create: {
     *     // ... data to create a Allegato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allegato we want to update
     *   }
     * })
     */
    upsert<T extends AllegatoUpsertArgs>(args: SelectSubset<T, AllegatoUpsertArgs<ExtArgs>>): Prisma__AllegatoClient<$Result.GetResult<Prisma.$AllegatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allegatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoCountArgs} args - Arguments to filter Allegatoes to count.
     * @example
     * // Count the number of Allegatoes
     * const count = await prisma.allegato.count({
     *   where: {
     *     // ... the filter for the Allegatoes we want to count
     *   }
     * })
    **/
    count<T extends AllegatoCountArgs>(
      args?: Subset<T, AllegatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllegatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allegato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllegatoAggregateArgs>(args: Subset<T, AllegatoAggregateArgs>): Prisma.PrismaPromise<GetAllegatoAggregateType<T>>

    /**
     * Group by Allegato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllegatoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllegatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllegatoGroupByArgs['orderBy'] }
        : { orderBy?: AllegatoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllegatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllegatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allegato model
   */
  readonly fields: AllegatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allegato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllegatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documento<T extends DocumentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentoDefaultArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Allegato model
   */
  interface AllegatoFieldRefs {
    readonly Id: FieldRef<"Allegato", 'Int'>
    readonly Nome: FieldRef<"Allegato", 'String'>
    readonly Percorso: FieldRef<"Allegato", 'String'>
    readonly Documento_Studente_Email: FieldRef<"Allegato", 'String'>
    readonly Documento_Anno: FieldRef<"Allegato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Allegato findUnique
   */
  export type AllegatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter, which Allegato to fetch.
     */
    where: AllegatoWhereUniqueInput
  }

  /**
   * Allegato findUniqueOrThrow
   */
  export type AllegatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter, which Allegato to fetch.
     */
    where: AllegatoWhereUniqueInput
  }

  /**
   * Allegato findFirst
   */
  export type AllegatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter, which Allegato to fetch.
     */
    where?: AllegatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allegatoes to fetch.
     */
    orderBy?: AllegatoOrderByWithRelationInput | AllegatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allegatoes.
     */
    cursor?: AllegatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allegatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allegatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allegatoes.
     */
    distinct?: AllegatoScalarFieldEnum | AllegatoScalarFieldEnum[]
  }

  /**
   * Allegato findFirstOrThrow
   */
  export type AllegatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter, which Allegato to fetch.
     */
    where?: AllegatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allegatoes to fetch.
     */
    orderBy?: AllegatoOrderByWithRelationInput | AllegatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allegatoes.
     */
    cursor?: AllegatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allegatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allegatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allegatoes.
     */
    distinct?: AllegatoScalarFieldEnum | AllegatoScalarFieldEnum[]
  }

  /**
   * Allegato findMany
   */
  export type AllegatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter, which Allegatoes to fetch.
     */
    where?: AllegatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allegatoes to fetch.
     */
    orderBy?: AllegatoOrderByWithRelationInput | AllegatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allegatoes.
     */
    cursor?: AllegatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allegatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allegatoes.
     */
    skip?: number
    distinct?: AllegatoScalarFieldEnum | AllegatoScalarFieldEnum[]
  }

  /**
   * Allegato create
   */
  export type AllegatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Allegato.
     */
    data: XOR<AllegatoCreateInput, AllegatoUncheckedCreateInput>
  }

  /**
   * Allegato createMany
   */
  export type AllegatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allegatoes.
     */
    data: AllegatoCreateManyInput | AllegatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allegato createManyAndReturn
   */
  export type AllegatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * The data used to create many Allegatoes.
     */
    data: AllegatoCreateManyInput | AllegatoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allegato update
   */
  export type AllegatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Allegato.
     */
    data: XOR<AllegatoUpdateInput, AllegatoUncheckedUpdateInput>
    /**
     * Choose, which Allegato to update.
     */
    where: AllegatoWhereUniqueInput
  }

  /**
   * Allegato updateMany
   */
  export type AllegatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allegatoes.
     */
    data: XOR<AllegatoUpdateManyMutationInput, AllegatoUncheckedUpdateManyInput>
    /**
     * Filter which Allegatoes to update
     */
    where?: AllegatoWhereInput
    /**
     * Limit how many Allegatoes to update.
     */
    limit?: number
  }

  /**
   * Allegato updateManyAndReturn
   */
  export type AllegatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * The data used to update Allegatoes.
     */
    data: XOR<AllegatoUpdateManyMutationInput, AllegatoUncheckedUpdateManyInput>
    /**
     * Filter which Allegatoes to update
     */
    where?: AllegatoWhereInput
    /**
     * Limit how many Allegatoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allegato upsert
   */
  export type AllegatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Allegato to update in case it exists.
     */
    where: AllegatoWhereUniqueInput
    /**
     * In case the Allegato found by the `where` argument doesn't exist, create a new Allegato with this data.
     */
    create: XOR<AllegatoCreateInput, AllegatoUncheckedCreateInput>
    /**
     * In case the Allegato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllegatoUpdateInput, AllegatoUncheckedUpdateInput>
  }

  /**
   * Allegato delete
   */
  export type AllegatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
    /**
     * Filter which Allegato to delete.
     */
    where: AllegatoWhereUniqueInput
  }

  /**
   * Allegato deleteMany
   */
  export type AllegatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allegatoes to delete
     */
    where?: AllegatoWhereInput
    /**
     * Limit how many Allegatoes to delete.
     */
    limit?: number
  }

  /**
   * Allegato without action
   */
  export type AllegatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allegato
     */
    select?: AllegatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allegato
     */
    omit?: AllegatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllegatoInclude<ExtArgs> | null
  }


  /**
   * Model ICF
   */

  export type AggregateICF = {
    _count: ICFCountAggregateOutputType | null
    _min: ICFMinAggregateOutputType | null
    _max: ICFMaxAggregateOutputType | null
  }

  export type ICFMinAggregateOutputType = {
    Codice: string | null
    Descrizione: string | null
  }

  export type ICFMaxAggregateOutputType = {
    Codice: string | null
    Descrizione: string | null
  }

  export type ICFCountAggregateOutputType = {
    Codice: number
    Descrizione: number
    _all: number
  }


  export type ICFMinAggregateInputType = {
    Codice?: true
    Descrizione?: true
  }

  export type ICFMaxAggregateInputType = {
    Codice?: true
    Descrizione?: true
  }

  export type ICFCountAggregateInputType = {
    Codice?: true
    Descrizione?: true
    _all?: true
  }

  export type ICFAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICF to aggregate.
     */
    where?: ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICFS to fetch.
     */
    orderBy?: ICFOrderByWithRelationInput | ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ICFS
    **/
    _count?: true | ICFCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ICFMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ICFMaxAggregateInputType
  }

  export type GetICFAggregateType<T extends ICFAggregateArgs> = {
        [P in keyof T & keyof AggregateICF]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateICF[P]>
      : GetScalarType<T[P], AggregateICF[P]>
  }




  export type ICFGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ICFWhereInput
    orderBy?: ICFOrderByWithAggregationInput | ICFOrderByWithAggregationInput[]
    by: ICFScalarFieldEnum[] | ICFScalarFieldEnum
    having?: ICFScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ICFCountAggregateInputType | true
    _min?: ICFMinAggregateInputType
    _max?: ICFMaxAggregateInputType
  }

  export type ICFGroupByOutputType = {
    Codice: string
    Descrizione: string | null
    _count: ICFCountAggregateOutputType | null
    _min: ICFMinAggregateOutputType | null
    _max: ICFMaxAggregateOutputType | null
  }

  type GetICFGroupByPayload<T extends ICFGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ICFGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ICFGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ICFGroupByOutputType[P]>
            : GetScalarType<T[P], ICFGroupByOutputType[P]>
        }
      >
    >


  export type ICFSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codice?: boolean
    Descrizione?: boolean
    Documenti_ICF?: boolean | ICF$Documenti_ICFArgs<ExtArgs>
    _count?: boolean | ICFCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iCF"]>

  export type ICFSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codice?: boolean
    Descrizione?: boolean
  }, ExtArgs["result"]["iCF"]>

  export type ICFSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codice?: boolean
    Descrizione?: boolean
  }, ExtArgs["result"]["iCF"]>

  export type ICFSelectScalar = {
    Codice?: boolean
    Descrizione?: boolean
  }

  export type ICFOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Codice" | "Descrizione", ExtArgs["result"]["iCF"]>
  export type ICFInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documenti_ICF?: boolean | ICF$Documenti_ICFArgs<ExtArgs>
    _count?: boolean | ICFCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ICFIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ICFIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ICFPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ICF"
    objects: {
      Documenti_ICF: Prisma.$Documento_ICFPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Codice: string
      Descrizione: string | null
    }, ExtArgs["result"]["iCF"]>
    composites: {}
  }

  type ICFGetPayload<S extends boolean | null | undefined | ICFDefaultArgs> = $Result.GetResult<Prisma.$ICFPayload, S>

  type ICFCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ICFFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ICFCountAggregateInputType | true
    }

  export interface ICFDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ICF'], meta: { name: 'ICF' } }
    /**
     * Find zero or one ICF that matches the filter.
     * @param {ICFFindUniqueArgs} args - Arguments to find a ICF
     * @example
     * // Get one ICF
     * const iCF = await prisma.iCF.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ICFFindUniqueArgs>(args: SelectSubset<T, ICFFindUniqueArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ICF that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ICFFindUniqueOrThrowArgs} args - Arguments to find a ICF
     * @example
     * // Get one ICF
     * const iCF = await prisma.iCF.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ICFFindUniqueOrThrowArgs>(args: SelectSubset<T, ICFFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICF that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFFindFirstArgs} args - Arguments to find a ICF
     * @example
     * // Get one ICF
     * const iCF = await prisma.iCF.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ICFFindFirstArgs>(args?: SelectSubset<T, ICFFindFirstArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ICF that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFFindFirstOrThrowArgs} args - Arguments to find a ICF
     * @example
     * // Get one ICF
     * const iCF = await prisma.iCF.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ICFFindFirstOrThrowArgs>(args?: SelectSubset<T, ICFFindFirstOrThrowArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ICFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ICFS
     * const iCFS = await prisma.iCF.findMany()
     * 
     * // Get first 10 ICFS
     * const iCFS = await prisma.iCF.findMany({ take: 10 })
     * 
     * // Only select the `Codice`
     * const iCFWithCodiceOnly = await prisma.iCF.findMany({ select: { Codice: true } })
     * 
     */
    findMany<T extends ICFFindManyArgs>(args?: SelectSubset<T, ICFFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ICF.
     * @param {ICFCreateArgs} args - Arguments to create a ICF.
     * @example
     * // Create one ICF
     * const ICF = await prisma.iCF.create({
     *   data: {
     *     // ... data to create a ICF
     *   }
     * })
     * 
     */
    create<T extends ICFCreateArgs>(args: SelectSubset<T, ICFCreateArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ICFS.
     * @param {ICFCreateManyArgs} args - Arguments to create many ICFS.
     * @example
     * // Create many ICFS
     * const iCF = await prisma.iCF.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ICFCreateManyArgs>(args?: SelectSubset<T, ICFCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ICFS and returns the data saved in the database.
     * @param {ICFCreateManyAndReturnArgs} args - Arguments to create many ICFS.
     * @example
     * // Create many ICFS
     * const iCF = await prisma.iCF.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ICFS and only return the `Codice`
     * const iCFWithCodiceOnly = await prisma.iCF.createManyAndReturn({
     *   select: { Codice: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ICFCreateManyAndReturnArgs>(args?: SelectSubset<T, ICFCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ICF.
     * @param {ICFDeleteArgs} args - Arguments to delete one ICF.
     * @example
     * // Delete one ICF
     * const ICF = await prisma.iCF.delete({
     *   where: {
     *     // ... filter to delete one ICF
     *   }
     * })
     * 
     */
    delete<T extends ICFDeleteArgs>(args: SelectSubset<T, ICFDeleteArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ICF.
     * @param {ICFUpdateArgs} args - Arguments to update one ICF.
     * @example
     * // Update one ICF
     * const iCF = await prisma.iCF.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ICFUpdateArgs>(args: SelectSubset<T, ICFUpdateArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ICFS.
     * @param {ICFDeleteManyArgs} args - Arguments to filter ICFS to delete.
     * @example
     * // Delete a few ICFS
     * const { count } = await prisma.iCF.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ICFDeleteManyArgs>(args?: SelectSubset<T, ICFDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ICFS
     * const iCF = await prisma.iCF.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ICFUpdateManyArgs>(args: SelectSubset<T, ICFUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ICFS and returns the data updated in the database.
     * @param {ICFUpdateManyAndReturnArgs} args - Arguments to update many ICFS.
     * @example
     * // Update many ICFS
     * const iCF = await prisma.iCF.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ICFS and only return the `Codice`
     * const iCFWithCodiceOnly = await prisma.iCF.updateManyAndReturn({
     *   select: { Codice: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ICFUpdateManyAndReturnArgs>(args: SelectSubset<T, ICFUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ICF.
     * @param {ICFUpsertArgs} args - Arguments to update or create a ICF.
     * @example
     * // Update or create a ICF
     * const iCF = await prisma.iCF.upsert({
     *   create: {
     *     // ... data to create a ICF
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ICF we want to update
     *   }
     * })
     */
    upsert<T extends ICFUpsertArgs>(args: SelectSubset<T, ICFUpsertArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ICFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFCountArgs} args - Arguments to filter ICFS to count.
     * @example
     * // Count the number of ICFS
     * const count = await prisma.iCF.count({
     *   where: {
     *     // ... the filter for the ICFS we want to count
     *   }
     * })
    **/
    count<T extends ICFCountArgs>(
      args?: Subset<T, ICFCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ICFCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ICF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ICFAggregateArgs>(args: Subset<T, ICFAggregateArgs>): Prisma.PrismaPromise<GetICFAggregateType<T>>

    /**
     * Group by ICF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ICFGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ICFGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ICFGroupByArgs['orderBy'] }
        : { orderBy?: ICFGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ICFGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetICFGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ICF model
   */
  readonly fields: ICFFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ICF.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ICFClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documenti_ICF<T extends ICF$Documenti_ICFArgs<ExtArgs> = {}>(args?: Subset<T, ICF$Documenti_ICFArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ICF model
   */
  interface ICFFieldRefs {
    readonly Codice: FieldRef<"ICF", 'String'>
    readonly Descrizione: FieldRef<"ICF", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ICF findUnique
   */
  export type ICFFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter, which ICF to fetch.
     */
    where: ICFWhereUniqueInput
  }

  /**
   * ICF findUniqueOrThrow
   */
  export type ICFFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter, which ICF to fetch.
     */
    where: ICFWhereUniqueInput
  }

  /**
   * ICF findFirst
   */
  export type ICFFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter, which ICF to fetch.
     */
    where?: ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICFS to fetch.
     */
    orderBy?: ICFOrderByWithRelationInput | ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICFS.
     */
    cursor?: ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICFS.
     */
    distinct?: ICFScalarFieldEnum | ICFScalarFieldEnum[]
  }

  /**
   * ICF findFirstOrThrow
   */
  export type ICFFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter, which ICF to fetch.
     */
    where?: ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICFS to fetch.
     */
    orderBy?: ICFOrderByWithRelationInput | ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ICFS.
     */
    cursor?: ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ICFS.
     */
    distinct?: ICFScalarFieldEnum | ICFScalarFieldEnum[]
  }

  /**
   * ICF findMany
   */
  export type ICFFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter, which ICFS to fetch.
     */
    where?: ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ICFS to fetch.
     */
    orderBy?: ICFOrderByWithRelationInput | ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ICFS.
     */
    cursor?: ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ICFS.
     */
    skip?: number
    distinct?: ICFScalarFieldEnum | ICFScalarFieldEnum[]
  }

  /**
   * ICF create
   */
  export type ICFCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * The data needed to create a ICF.
     */
    data: XOR<ICFCreateInput, ICFUncheckedCreateInput>
  }

  /**
   * ICF createMany
   */
  export type ICFCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ICFS.
     */
    data: ICFCreateManyInput | ICFCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ICF createManyAndReturn
   */
  export type ICFCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * The data used to create many ICFS.
     */
    data: ICFCreateManyInput | ICFCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ICF update
   */
  export type ICFUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * The data needed to update a ICF.
     */
    data: XOR<ICFUpdateInput, ICFUncheckedUpdateInput>
    /**
     * Choose, which ICF to update.
     */
    where: ICFWhereUniqueInput
  }

  /**
   * ICF updateMany
   */
  export type ICFUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ICFS.
     */
    data: XOR<ICFUpdateManyMutationInput, ICFUncheckedUpdateManyInput>
    /**
     * Filter which ICFS to update
     */
    where?: ICFWhereInput
    /**
     * Limit how many ICFS to update.
     */
    limit?: number
  }

  /**
   * ICF updateManyAndReturn
   */
  export type ICFUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * The data used to update ICFS.
     */
    data: XOR<ICFUpdateManyMutationInput, ICFUncheckedUpdateManyInput>
    /**
     * Filter which ICFS to update
     */
    where?: ICFWhereInput
    /**
     * Limit how many ICFS to update.
     */
    limit?: number
  }

  /**
   * ICF upsert
   */
  export type ICFUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * The filter to search for the ICF to update in case it exists.
     */
    where: ICFWhereUniqueInput
    /**
     * In case the ICF found by the `where` argument doesn't exist, create a new ICF with this data.
     */
    create: XOR<ICFCreateInput, ICFUncheckedCreateInput>
    /**
     * In case the ICF was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ICFUpdateInput, ICFUncheckedUpdateInput>
  }

  /**
   * ICF delete
   */
  export type ICFDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
    /**
     * Filter which ICF to delete.
     */
    where: ICFWhereUniqueInput
  }

  /**
   * ICF deleteMany
   */
  export type ICFDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ICFS to delete
     */
    where?: ICFWhereInput
    /**
     * Limit how many ICFS to delete.
     */
    limit?: number
  }

  /**
   * ICF.Documenti_ICF
   */
  export type ICF$Documenti_ICFArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    where?: Documento_ICFWhereInput
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    cursor?: Documento_ICFWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Documento_ICFScalarFieldEnum | Documento_ICFScalarFieldEnum[]
  }

  /**
   * ICF without action
   */
  export type ICFDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ICF
     */
    select?: ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ICF
     */
    omit?: ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ICFInclude<ExtArgs> | null
  }


  /**
   * Model Insegnamento
   */

  export type AggregateInsegnamento = {
    _count: InsegnamentoCountAggregateOutputType | null
    _avg: InsegnamentoAvgAggregateOutputType | null
    _sum: InsegnamentoSumAggregateOutputType | null
    _min: InsegnamentoMinAggregateOutputType | null
    _max: InsegnamentoMaxAggregateOutputType | null
  }

  export type InsegnamentoAvgAggregateOutputType = {
    Classe_Id: number | null
  }

  export type InsegnamentoSumAggregateOutputType = {
    Classe_Id: number | null
  }

  export type InsegnamentoMinAggregateOutputType = {
    Docente_Email: string | null
    Classe_Id: number | null
    Materia_Nome: string | null
  }

  export type InsegnamentoMaxAggregateOutputType = {
    Docente_Email: string | null
    Classe_Id: number | null
    Materia_Nome: string | null
  }

  export type InsegnamentoCountAggregateOutputType = {
    Docente_Email: number
    Classe_Id: number
    Materia_Nome: number
    _all: number
  }


  export type InsegnamentoAvgAggregateInputType = {
    Classe_Id?: true
  }

  export type InsegnamentoSumAggregateInputType = {
    Classe_Id?: true
  }

  export type InsegnamentoMinAggregateInputType = {
    Docente_Email?: true
    Classe_Id?: true
    Materia_Nome?: true
  }

  export type InsegnamentoMaxAggregateInputType = {
    Docente_Email?: true
    Classe_Id?: true
    Materia_Nome?: true
  }

  export type InsegnamentoCountAggregateInputType = {
    Docente_Email?: true
    Classe_Id?: true
    Materia_Nome?: true
    _all?: true
  }

  export type InsegnamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insegnamento to aggregate.
     */
    where?: InsegnamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insegnamentos to fetch.
     */
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsegnamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insegnamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insegnamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insegnamentos
    **/
    _count?: true | InsegnamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsegnamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsegnamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsegnamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsegnamentoMaxAggregateInputType
  }

  export type GetInsegnamentoAggregateType<T extends InsegnamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateInsegnamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsegnamento[P]>
      : GetScalarType<T[P], AggregateInsegnamento[P]>
  }




  export type InsegnamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsegnamentoWhereInput
    orderBy?: InsegnamentoOrderByWithAggregationInput | InsegnamentoOrderByWithAggregationInput[]
    by: InsegnamentoScalarFieldEnum[] | InsegnamentoScalarFieldEnum
    having?: InsegnamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsegnamentoCountAggregateInputType | true
    _avg?: InsegnamentoAvgAggregateInputType
    _sum?: InsegnamentoSumAggregateInputType
    _min?: InsegnamentoMinAggregateInputType
    _max?: InsegnamentoMaxAggregateInputType
  }

  export type InsegnamentoGroupByOutputType = {
    Docente_Email: string
    Classe_Id: number
    Materia_Nome: string
    _count: InsegnamentoCountAggregateOutputType | null
    _avg: InsegnamentoAvgAggregateOutputType | null
    _sum: InsegnamentoSumAggregateOutputType | null
    _min: InsegnamentoMinAggregateOutputType | null
    _max: InsegnamentoMaxAggregateOutputType | null
  }

  type GetInsegnamentoGroupByPayload<T extends InsegnamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsegnamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsegnamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsegnamentoGroupByOutputType[P]>
            : GetScalarType<T[P], InsegnamentoGroupByOutputType[P]>
        }
      >
    >


  export type InsegnamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Docente_Email?: boolean
    Classe_Id?: boolean
    Materia_Nome?: boolean
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insegnamento"]>

  export type InsegnamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Docente_Email?: boolean
    Classe_Id?: boolean
    Materia_Nome?: boolean
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insegnamento"]>

  export type InsegnamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Docente_Email?: boolean
    Classe_Id?: boolean
    Materia_Nome?: boolean
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insegnamento"]>

  export type InsegnamentoSelectScalar = {
    Docente_Email?: boolean
    Classe_Id?: boolean
    Materia_Nome?: boolean
  }

  export type InsegnamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Docente_Email" | "Classe_Id" | "Materia_Nome", ExtArgs["result"]["insegnamento"]>
  export type InsegnamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InsegnamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type InsegnamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Docente?: boolean | DocenteDefaultArgs<ExtArgs>
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $InsegnamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insegnamento"
    objects: {
      Docente: Prisma.$DocentePayload<ExtArgs>
      Classe: Prisma.$ClassePayload<ExtArgs>
      Materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Docente_Email: string
      Classe_Id: number
      Materia_Nome: string
    }, ExtArgs["result"]["insegnamento"]>
    composites: {}
  }

  type InsegnamentoGetPayload<S extends boolean | null | undefined | InsegnamentoDefaultArgs> = $Result.GetResult<Prisma.$InsegnamentoPayload, S>

  type InsegnamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsegnamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsegnamentoCountAggregateInputType | true
    }

  export interface InsegnamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insegnamento'], meta: { name: 'Insegnamento' } }
    /**
     * Find zero or one Insegnamento that matches the filter.
     * @param {InsegnamentoFindUniqueArgs} args - Arguments to find a Insegnamento
     * @example
     * // Get one Insegnamento
     * const insegnamento = await prisma.insegnamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsegnamentoFindUniqueArgs>(args: SelectSubset<T, InsegnamentoFindUniqueArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insegnamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsegnamentoFindUniqueOrThrowArgs} args - Arguments to find a Insegnamento
     * @example
     * // Get one Insegnamento
     * const insegnamento = await prisma.insegnamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsegnamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, InsegnamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insegnamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoFindFirstArgs} args - Arguments to find a Insegnamento
     * @example
     * // Get one Insegnamento
     * const insegnamento = await prisma.insegnamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsegnamentoFindFirstArgs>(args?: SelectSubset<T, InsegnamentoFindFirstArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insegnamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoFindFirstOrThrowArgs} args - Arguments to find a Insegnamento
     * @example
     * // Get one Insegnamento
     * const insegnamento = await prisma.insegnamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsegnamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, InsegnamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insegnamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insegnamentos
     * const insegnamentos = await prisma.insegnamento.findMany()
     * 
     * // Get first 10 Insegnamentos
     * const insegnamentos = await prisma.insegnamento.findMany({ take: 10 })
     * 
     * // Only select the `Docente_Email`
     * const insegnamentoWithDocente_EmailOnly = await prisma.insegnamento.findMany({ select: { Docente_Email: true } })
     * 
     */
    findMany<T extends InsegnamentoFindManyArgs>(args?: SelectSubset<T, InsegnamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insegnamento.
     * @param {InsegnamentoCreateArgs} args - Arguments to create a Insegnamento.
     * @example
     * // Create one Insegnamento
     * const Insegnamento = await prisma.insegnamento.create({
     *   data: {
     *     // ... data to create a Insegnamento
     *   }
     * })
     * 
     */
    create<T extends InsegnamentoCreateArgs>(args: SelectSubset<T, InsegnamentoCreateArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insegnamentos.
     * @param {InsegnamentoCreateManyArgs} args - Arguments to create many Insegnamentos.
     * @example
     * // Create many Insegnamentos
     * const insegnamento = await prisma.insegnamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsegnamentoCreateManyArgs>(args?: SelectSubset<T, InsegnamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insegnamentos and returns the data saved in the database.
     * @param {InsegnamentoCreateManyAndReturnArgs} args - Arguments to create many Insegnamentos.
     * @example
     * // Create many Insegnamentos
     * const insegnamento = await prisma.insegnamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insegnamentos and only return the `Docente_Email`
     * const insegnamentoWithDocente_EmailOnly = await prisma.insegnamento.createManyAndReturn({
     *   select: { Docente_Email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsegnamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, InsegnamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insegnamento.
     * @param {InsegnamentoDeleteArgs} args - Arguments to delete one Insegnamento.
     * @example
     * // Delete one Insegnamento
     * const Insegnamento = await prisma.insegnamento.delete({
     *   where: {
     *     // ... filter to delete one Insegnamento
     *   }
     * })
     * 
     */
    delete<T extends InsegnamentoDeleteArgs>(args: SelectSubset<T, InsegnamentoDeleteArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insegnamento.
     * @param {InsegnamentoUpdateArgs} args - Arguments to update one Insegnamento.
     * @example
     * // Update one Insegnamento
     * const insegnamento = await prisma.insegnamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsegnamentoUpdateArgs>(args: SelectSubset<T, InsegnamentoUpdateArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insegnamentos.
     * @param {InsegnamentoDeleteManyArgs} args - Arguments to filter Insegnamentos to delete.
     * @example
     * // Delete a few Insegnamentos
     * const { count } = await prisma.insegnamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsegnamentoDeleteManyArgs>(args?: SelectSubset<T, InsegnamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insegnamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insegnamentos
     * const insegnamento = await prisma.insegnamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsegnamentoUpdateManyArgs>(args: SelectSubset<T, InsegnamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insegnamentos and returns the data updated in the database.
     * @param {InsegnamentoUpdateManyAndReturnArgs} args - Arguments to update many Insegnamentos.
     * @example
     * // Update many Insegnamentos
     * const insegnamento = await prisma.insegnamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insegnamentos and only return the `Docente_Email`
     * const insegnamentoWithDocente_EmailOnly = await prisma.insegnamento.updateManyAndReturn({
     *   select: { Docente_Email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InsegnamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, InsegnamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insegnamento.
     * @param {InsegnamentoUpsertArgs} args - Arguments to update or create a Insegnamento.
     * @example
     * // Update or create a Insegnamento
     * const insegnamento = await prisma.insegnamento.upsert({
     *   create: {
     *     // ... data to create a Insegnamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insegnamento we want to update
     *   }
     * })
     */
    upsert<T extends InsegnamentoUpsertArgs>(args: SelectSubset<T, InsegnamentoUpsertArgs<ExtArgs>>): Prisma__InsegnamentoClient<$Result.GetResult<Prisma.$InsegnamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insegnamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoCountArgs} args - Arguments to filter Insegnamentos to count.
     * @example
     * // Count the number of Insegnamentos
     * const count = await prisma.insegnamento.count({
     *   where: {
     *     // ... the filter for the Insegnamentos we want to count
     *   }
     * })
    **/
    count<T extends InsegnamentoCountArgs>(
      args?: Subset<T, InsegnamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsegnamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insegnamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsegnamentoAggregateArgs>(args: Subset<T, InsegnamentoAggregateArgs>): Prisma.PrismaPromise<GetInsegnamentoAggregateType<T>>

    /**
     * Group by Insegnamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsegnamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InsegnamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsegnamentoGroupByArgs['orderBy'] }
        : { orderBy?: InsegnamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InsegnamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsegnamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insegnamento model
   */
  readonly fields: InsegnamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insegnamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsegnamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Insegnamento model
   */
  interface InsegnamentoFieldRefs {
    readonly Docente_Email: FieldRef<"Insegnamento", 'String'>
    readonly Classe_Id: FieldRef<"Insegnamento", 'Int'>
    readonly Materia_Nome: FieldRef<"Insegnamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Insegnamento findUnique
   */
  export type InsegnamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter, which Insegnamento to fetch.
     */
    where: InsegnamentoWhereUniqueInput
  }

  /**
   * Insegnamento findUniqueOrThrow
   */
  export type InsegnamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter, which Insegnamento to fetch.
     */
    where: InsegnamentoWhereUniqueInput
  }

  /**
   * Insegnamento findFirst
   */
  export type InsegnamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter, which Insegnamento to fetch.
     */
    where?: InsegnamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insegnamentos to fetch.
     */
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insegnamentos.
     */
    cursor?: InsegnamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insegnamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insegnamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insegnamentos.
     */
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Insegnamento findFirstOrThrow
   */
  export type InsegnamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter, which Insegnamento to fetch.
     */
    where?: InsegnamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insegnamentos to fetch.
     */
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insegnamentos.
     */
    cursor?: InsegnamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insegnamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insegnamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insegnamentos.
     */
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Insegnamento findMany
   */
  export type InsegnamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter, which Insegnamentos to fetch.
     */
    where?: InsegnamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insegnamentos to fetch.
     */
    orderBy?: InsegnamentoOrderByWithRelationInput | InsegnamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insegnamentos.
     */
    cursor?: InsegnamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insegnamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insegnamentos.
     */
    skip?: number
    distinct?: InsegnamentoScalarFieldEnum | InsegnamentoScalarFieldEnum[]
  }

  /**
   * Insegnamento create
   */
  export type InsegnamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Insegnamento.
     */
    data: XOR<InsegnamentoCreateInput, InsegnamentoUncheckedCreateInput>
  }

  /**
   * Insegnamento createMany
   */
  export type InsegnamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insegnamentos.
     */
    data: InsegnamentoCreateManyInput | InsegnamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insegnamento createManyAndReturn
   */
  export type InsegnamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Insegnamentos.
     */
    data: InsegnamentoCreateManyInput | InsegnamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insegnamento update
   */
  export type InsegnamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Insegnamento.
     */
    data: XOR<InsegnamentoUpdateInput, InsegnamentoUncheckedUpdateInput>
    /**
     * Choose, which Insegnamento to update.
     */
    where: InsegnamentoWhereUniqueInput
  }

  /**
   * Insegnamento updateMany
   */
  export type InsegnamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insegnamentos.
     */
    data: XOR<InsegnamentoUpdateManyMutationInput, InsegnamentoUncheckedUpdateManyInput>
    /**
     * Filter which Insegnamentos to update
     */
    where?: InsegnamentoWhereInput
    /**
     * Limit how many Insegnamentos to update.
     */
    limit?: number
  }

  /**
   * Insegnamento updateManyAndReturn
   */
  export type InsegnamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * The data used to update Insegnamentos.
     */
    data: XOR<InsegnamentoUpdateManyMutationInput, InsegnamentoUncheckedUpdateManyInput>
    /**
     * Filter which Insegnamentos to update
     */
    where?: InsegnamentoWhereInput
    /**
     * Limit how many Insegnamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insegnamento upsert
   */
  export type InsegnamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Insegnamento to update in case it exists.
     */
    where: InsegnamentoWhereUniqueInput
    /**
     * In case the Insegnamento found by the `where` argument doesn't exist, create a new Insegnamento with this data.
     */
    create: XOR<InsegnamentoCreateInput, InsegnamentoUncheckedCreateInput>
    /**
     * In case the Insegnamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsegnamentoUpdateInput, InsegnamentoUncheckedUpdateInput>
  }

  /**
   * Insegnamento delete
   */
  export type InsegnamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
    /**
     * Filter which Insegnamento to delete.
     */
    where: InsegnamentoWhereUniqueInput
  }

  /**
   * Insegnamento deleteMany
   */
  export type InsegnamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insegnamentos to delete
     */
    where?: InsegnamentoWhereInput
    /**
     * Limit how many Insegnamentos to delete.
     */
    limit?: number
  }

  /**
   * Insegnamento without action
   */
  export type InsegnamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insegnamento
     */
    select?: InsegnamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insegnamento
     */
    omit?: InsegnamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsegnamentoInclude<ExtArgs> | null
  }


  /**
   * Model Classe_Studente
   */

  export type AggregateClasse_Studente = {
    _count: Classe_StudenteCountAggregateOutputType | null
    _avg: Classe_StudenteAvgAggregateOutputType | null
    _sum: Classe_StudenteSumAggregateOutputType | null
    _min: Classe_StudenteMinAggregateOutputType | null
    _max: Classe_StudenteMaxAggregateOutputType | null
  }

  export type Classe_StudenteAvgAggregateOutputType = {
    Classe_Id: number | null
  }

  export type Classe_StudenteSumAggregateOutputType = {
    Classe_Id: number | null
  }

  export type Classe_StudenteMinAggregateOutputType = {
    Classe_Id: number | null
    Studente_Email: string | null
  }

  export type Classe_StudenteMaxAggregateOutputType = {
    Classe_Id: number | null
    Studente_Email: string | null
  }

  export type Classe_StudenteCountAggregateOutputType = {
    Classe_Id: number
    Studente_Email: number
    _all: number
  }


  export type Classe_StudenteAvgAggregateInputType = {
    Classe_Id?: true
  }

  export type Classe_StudenteSumAggregateInputType = {
    Classe_Id?: true
  }

  export type Classe_StudenteMinAggregateInputType = {
    Classe_Id?: true
    Studente_Email?: true
  }

  export type Classe_StudenteMaxAggregateInputType = {
    Classe_Id?: true
    Studente_Email?: true
  }

  export type Classe_StudenteCountAggregateInputType = {
    Classe_Id?: true
    Studente_Email?: true
    _all?: true
  }

  export type Classe_StudenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe_Studente to aggregate.
     */
    where?: Classe_StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classe_Studentes to fetch.
     */
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Classe_StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classe_Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classe_Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classe_Studentes
    **/
    _count?: true | Classe_StudenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Classe_StudenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Classe_StudenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Classe_StudenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Classe_StudenteMaxAggregateInputType
  }

  export type GetClasse_StudenteAggregateType<T extends Classe_StudenteAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse_Studente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse_Studente[P]>
      : GetScalarType<T[P], AggregateClasse_Studente[P]>
  }




  export type Classe_StudenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Classe_StudenteWhereInput
    orderBy?: Classe_StudenteOrderByWithAggregationInput | Classe_StudenteOrderByWithAggregationInput[]
    by: Classe_StudenteScalarFieldEnum[] | Classe_StudenteScalarFieldEnum
    having?: Classe_StudenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Classe_StudenteCountAggregateInputType | true
    _avg?: Classe_StudenteAvgAggregateInputType
    _sum?: Classe_StudenteSumAggregateInputType
    _min?: Classe_StudenteMinAggregateInputType
    _max?: Classe_StudenteMaxAggregateInputType
  }

  export type Classe_StudenteGroupByOutputType = {
    Classe_Id: number
    Studente_Email: string
    _count: Classe_StudenteCountAggregateOutputType | null
    _avg: Classe_StudenteAvgAggregateOutputType | null
    _sum: Classe_StudenteSumAggregateOutputType | null
    _min: Classe_StudenteMinAggregateOutputType | null
    _max: Classe_StudenteMaxAggregateOutputType | null
  }

  type GetClasse_StudenteGroupByPayload<T extends Classe_StudenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Classe_StudenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Classe_StudenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Classe_StudenteGroupByOutputType[P]>
            : GetScalarType<T[P], Classe_StudenteGroupByOutputType[P]>
        }
      >
    >


  export type Classe_StudenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Classe_Id?: boolean
    Studente_Email?: boolean
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe_Studente"]>

  export type Classe_StudenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Classe_Id?: boolean
    Studente_Email?: boolean
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe_Studente"]>

  export type Classe_StudenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Classe_Id?: boolean
    Studente_Email?: boolean
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classe_Studente"]>

  export type Classe_StudenteSelectScalar = {
    Classe_Id?: boolean
    Studente_Email?: boolean
  }

  export type Classe_StudenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Classe_Id" | "Studente_Email", ExtArgs["result"]["classe_Studente"]>
  export type Classe_StudenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }
  export type Classe_StudenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }
  export type Classe_StudenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classe?: boolean | ClasseDefaultArgs<ExtArgs>
    Studente?: boolean | StudenteDefaultArgs<ExtArgs>
  }

  export type $Classe_StudentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classe_Studente"
    objects: {
      Classe: Prisma.$ClassePayload<ExtArgs>
      Studente: Prisma.$StudentePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Classe_Id: number
      Studente_Email: string
    }, ExtArgs["result"]["classe_Studente"]>
    composites: {}
  }

  type Classe_StudenteGetPayload<S extends boolean | null | undefined | Classe_StudenteDefaultArgs> = $Result.GetResult<Prisma.$Classe_StudentePayload, S>

  type Classe_StudenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Classe_StudenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Classe_StudenteCountAggregateInputType | true
    }

  export interface Classe_StudenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classe_Studente'], meta: { name: 'Classe_Studente' } }
    /**
     * Find zero or one Classe_Studente that matches the filter.
     * @param {Classe_StudenteFindUniqueArgs} args - Arguments to find a Classe_Studente
     * @example
     * // Get one Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Classe_StudenteFindUniqueArgs>(args: SelectSubset<T, Classe_StudenteFindUniqueArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe_Studente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Classe_StudenteFindUniqueOrThrowArgs} args - Arguments to find a Classe_Studente
     * @example
     * // Get one Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Classe_StudenteFindUniqueOrThrowArgs>(args: SelectSubset<T, Classe_StudenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe_Studente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteFindFirstArgs} args - Arguments to find a Classe_Studente
     * @example
     * // Get one Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Classe_StudenteFindFirstArgs>(args?: SelectSubset<T, Classe_StudenteFindFirstArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe_Studente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteFindFirstOrThrowArgs} args - Arguments to find a Classe_Studente
     * @example
     * // Get one Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Classe_StudenteFindFirstOrThrowArgs>(args?: SelectSubset<T, Classe_StudenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classe_Studentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classe_Studentes
     * const classe_Studentes = await prisma.classe_Studente.findMany()
     * 
     * // Get first 10 Classe_Studentes
     * const classe_Studentes = await prisma.classe_Studente.findMany({ take: 10 })
     * 
     * // Only select the `Classe_Id`
     * const classe_StudenteWithClasse_IdOnly = await prisma.classe_Studente.findMany({ select: { Classe_Id: true } })
     * 
     */
    findMany<T extends Classe_StudenteFindManyArgs>(args?: SelectSubset<T, Classe_StudenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe_Studente.
     * @param {Classe_StudenteCreateArgs} args - Arguments to create a Classe_Studente.
     * @example
     * // Create one Classe_Studente
     * const Classe_Studente = await prisma.classe_Studente.create({
     *   data: {
     *     // ... data to create a Classe_Studente
     *   }
     * })
     * 
     */
    create<T extends Classe_StudenteCreateArgs>(args: SelectSubset<T, Classe_StudenteCreateArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classe_Studentes.
     * @param {Classe_StudenteCreateManyArgs} args - Arguments to create many Classe_Studentes.
     * @example
     * // Create many Classe_Studentes
     * const classe_Studente = await prisma.classe_Studente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Classe_StudenteCreateManyArgs>(args?: SelectSubset<T, Classe_StudenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classe_Studentes and returns the data saved in the database.
     * @param {Classe_StudenteCreateManyAndReturnArgs} args - Arguments to create many Classe_Studentes.
     * @example
     * // Create many Classe_Studentes
     * const classe_Studente = await prisma.classe_Studente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classe_Studentes and only return the `Classe_Id`
     * const classe_StudenteWithClasse_IdOnly = await prisma.classe_Studente.createManyAndReturn({
     *   select: { Classe_Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Classe_StudenteCreateManyAndReturnArgs>(args?: SelectSubset<T, Classe_StudenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classe_Studente.
     * @param {Classe_StudenteDeleteArgs} args - Arguments to delete one Classe_Studente.
     * @example
     * // Delete one Classe_Studente
     * const Classe_Studente = await prisma.classe_Studente.delete({
     *   where: {
     *     // ... filter to delete one Classe_Studente
     *   }
     * })
     * 
     */
    delete<T extends Classe_StudenteDeleteArgs>(args: SelectSubset<T, Classe_StudenteDeleteArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe_Studente.
     * @param {Classe_StudenteUpdateArgs} args - Arguments to update one Classe_Studente.
     * @example
     * // Update one Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Classe_StudenteUpdateArgs>(args: SelectSubset<T, Classe_StudenteUpdateArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classe_Studentes.
     * @param {Classe_StudenteDeleteManyArgs} args - Arguments to filter Classe_Studentes to delete.
     * @example
     * // Delete a few Classe_Studentes
     * const { count } = await prisma.classe_Studente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Classe_StudenteDeleteManyArgs>(args?: SelectSubset<T, Classe_StudenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classe_Studentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classe_Studentes
     * const classe_Studente = await prisma.classe_Studente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Classe_StudenteUpdateManyArgs>(args: SelectSubset<T, Classe_StudenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classe_Studentes and returns the data updated in the database.
     * @param {Classe_StudenteUpdateManyAndReturnArgs} args - Arguments to update many Classe_Studentes.
     * @example
     * // Update many Classe_Studentes
     * const classe_Studente = await prisma.classe_Studente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classe_Studentes and only return the `Classe_Id`
     * const classe_StudenteWithClasse_IdOnly = await prisma.classe_Studente.updateManyAndReturn({
     *   select: { Classe_Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Classe_StudenteUpdateManyAndReturnArgs>(args: SelectSubset<T, Classe_StudenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classe_Studente.
     * @param {Classe_StudenteUpsertArgs} args - Arguments to update or create a Classe_Studente.
     * @example
     * // Update or create a Classe_Studente
     * const classe_Studente = await prisma.classe_Studente.upsert({
     *   create: {
     *     // ... data to create a Classe_Studente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe_Studente we want to update
     *   }
     * })
     */
    upsert<T extends Classe_StudenteUpsertArgs>(args: SelectSubset<T, Classe_StudenteUpsertArgs<ExtArgs>>): Prisma__Classe_StudenteClient<$Result.GetResult<Prisma.$Classe_StudentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classe_Studentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteCountArgs} args - Arguments to filter Classe_Studentes to count.
     * @example
     * // Count the number of Classe_Studentes
     * const count = await prisma.classe_Studente.count({
     *   where: {
     *     // ... the filter for the Classe_Studentes we want to count
     *   }
     * })
    **/
    count<T extends Classe_StudenteCountArgs>(
      args?: Subset<T, Classe_StudenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Classe_StudenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe_Studente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Classe_StudenteAggregateArgs>(args: Subset<T, Classe_StudenteAggregateArgs>): Prisma.PrismaPromise<GetClasse_StudenteAggregateType<T>>

    /**
     * Group by Classe_Studente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Classe_StudenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Classe_StudenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Classe_StudenteGroupByArgs['orderBy'] }
        : { orderBy?: Classe_StudenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Classe_StudenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasse_StudenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classe_Studente model
   */
  readonly fields: Classe_StudenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classe_Studente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Classe_StudenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Classe<T extends ClasseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasseDefaultArgs<ExtArgs>>): Prisma__ClasseClient<$Result.GetResult<Prisma.$ClassePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Studente<T extends StudenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudenteDefaultArgs<ExtArgs>>): Prisma__StudenteClient<$Result.GetResult<Prisma.$StudentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classe_Studente model
   */
  interface Classe_StudenteFieldRefs {
    readonly Classe_Id: FieldRef<"Classe_Studente", 'Int'>
    readonly Studente_Email: FieldRef<"Classe_Studente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classe_Studente findUnique
   */
  export type Classe_StudenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Classe_Studente to fetch.
     */
    where: Classe_StudenteWhereUniqueInput
  }

  /**
   * Classe_Studente findUniqueOrThrow
   */
  export type Classe_StudenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Classe_Studente to fetch.
     */
    where: Classe_StudenteWhereUniqueInput
  }

  /**
   * Classe_Studente findFirst
   */
  export type Classe_StudenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Classe_Studente to fetch.
     */
    where?: Classe_StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classe_Studentes to fetch.
     */
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classe_Studentes.
     */
    cursor?: Classe_StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classe_Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classe_Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classe_Studentes.
     */
    distinct?: Classe_StudenteScalarFieldEnum | Classe_StudenteScalarFieldEnum[]
  }

  /**
   * Classe_Studente findFirstOrThrow
   */
  export type Classe_StudenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Classe_Studente to fetch.
     */
    where?: Classe_StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classe_Studentes to fetch.
     */
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classe_Studentes.
     */
    cursor?: Classe_StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classe_Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classe_Studentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classe_Studentes.
     */
    distinct?: Classe_StudenteScalarFieldEnum | Classe_StudenteScalarFieldEnum[]
  }

  /**
   * Classe_Studente findMany
   */
  export type Classe_StudenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter, which Classe_Studentes to fetch.
     */
    where?: Classe_StudenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classe_Studentes to fetch.
     */
    orderBy?: Classe_StudenteOrderByWithRelationInput | Classe_StudenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classe_Studentes.
     */
    cursor?: Classe_StudenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classe_Studentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classe_Studentes.
     */
    skip?: number
    distinct?: Classe_StudenteScalarFieldEnum | Classe_StudenteScalarFieldEnum[]
  }

  /**
   * Classe_Studente create
   */
  export type Classe_StudenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Classe_Studente.
     */
    data: XOR<Classe_StudenteCreateInput, Classe_StudenteUncheckedCreateInput>
  }

  /**
   * Classe_Studente createMany
   */
  export type Classe_StudenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classe_Studentes.
     */
    data: Classe_StudenteCreateManyInput | Classe_StudenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classe_Studente createManyAndReturn
   */
  export type Classe_StudenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * The data used to create many Classe_Studentes.
     */
    data: Classe_StudenteCreateManyInput | Classe_StudenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classe_Studente update
   */
  export type Classe_StudenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Classe_Studente.
     */
    data: XOR<Classe_StudenteUpdateInput, Classe_StudenteUncheckedUpdateInput>
    /**
     * Choose, which Classe_Studente to update.
     */
    where: Classe_StudenteWhereUniqueInput
  }

  /**
   * Classe_Studente updateMany
   */
  export type Classe_StudenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classe_Studentes.
     */
    data: XOR<Classe_StudenteUpdateManyMutationInput, Classe_StudenteUncheckedUpdateManyInput>
    /**
     * Filter which Classe_Studentes to update
     */
    where?: Classe_StudenteWhereInput
    /**
     * Limit how many Classe_Studentes to update.
     */
    limit?: number
  }

  /**
   * Classe_Studente updateManyAndReturn
   */
  export type Classe_StudenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * The data used to update Classe_Studentes.
     */
    data: XOR<Classe_StudenteUpdateManyMutationInput, Classe_StudenteUncheckedUpdateManyInput>
    /**
     * Filter which Classe_Studentes to update
     */
    where?: Classe_StudenteWhereInput
    /**
     * Limit how many Classe_Studentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classe_Studente upsert
   */
  export type Classe_StudenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Classe_Studente to update in case it exists.
     */
    where: Classe_StudenteWhereUniqueInput
    /**
     * In case the Classe_Studente found by the `where` argument doesn't exist, create a new Classe_Studente with this data.
     */
    create: XOR<Classe_StudenteCreateInput, Classe_StudenteUncheckedCreateInput>
    /**
     * In case the Classe_Studente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Classe_StudenteUpdateInput, Classe_StudenteUncheckedUpdateInput>
  }

  /**
   * Classe_Studente delete
   */
  export type Classe_StudenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
    /**
     * Filter which Classe_Studente to delete.
     */
    where: Classe_StudenteWhereUniqueInput
  }

  /**
   * Classe_Studente deleteMany
   */
  export type Classe_StudenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classe_Studentes to delete
     */
    where?: Classe_StudenteWhereInput
    /**
     * Limit how many Classe_Studentes to delete.
     */
    limit?: number
  }

  /**
   * Classe_Studente without action
   */
  export type Classe_StudenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classe_Studente
     */
    select?: Classe_StudenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classe_Studente
     */
    omit?: Classe_StudenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Classe_StudenteInclude<ExtArgs> | null
  }


  /**
   * Model Materia_Indicatore
   */

  export type AggregateMateria_Indicatore = {
    _count: Materia_IndicatoreCountAggregateOutputType | null
    _avg: Materia_IndicatoreAvgAggregateOutputType | null
    _sum: Materia_IndicatoreSumAggregateOutputType | null
    _min: Materia_IndicatoreMinAggregateOutputType | null
    _max: Materia_IndicatoreMaxAggregateOutputType | null
  }

  export type Materia_IndicatoreAvgAggregateOutputType = {
    Indicatore_Id: number | null
  }

  export type Materia_IndicatoreSumAggregateOutputType = {
    Indicatore_Id: number | null
  }

  export type Materia_IndicatoreMinAggregateOutputType = {
    Materia_Nome: string | null
    Indicatore_Id: number | null
    Valore: boolean | null
  }

  export type Materia_IndicatoreMaxAggregateOutputType = {
    Materia_Nome: string | null
    Indicatore_Id: number | null
    Valore: boolean | null
  }

  export type Materia_IndicatoreCountAggregateOutputType = {
    Materia_Nome: number
    Indicatore_Id: number
    Valore: number
    _all: number
  }


  export type Materia_IndicatoreAvgAggregateInputType = {
    Indicatore_Id?: true
  }

  export type Materia_IndicatoreSumAggregateInputType = {
    Indicatore_Id?: true
  }

  export type Materia_IndicatoreMinAggregateInputType = {
    Materia_Nome?: true
    Indicatore_Id?: true
    Valore?: true
  }

  export type Materia_IndicatoreMaxAggregateInputType = {
    Materia_Nome?: true
    Indicatore_Id?: true
    Valore?: true
  }

  export type Materia_IndicatoreCountAggregateInputType = {
    Materia_Nome?: true
    Indicatore_Id?: true
    Valore?: true
    _all?: true
  }

  export type Materia_IndicatoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia_Indicatore to aggregate.
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Indicatores to fetch.
     */
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Materia_IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materia_Indicatores
    **/
    _count?: true | Materia_IndicatoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Materia_IndicatoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Materia_IndicatoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Materia_IndicatoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Materia_IndicatoreMaxAggregateInputType
  }

  export type GetMateria_IndicatoreAggregateType<T extends Materia_IndicatoreAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria_Indicatore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria_Indicatore[P]>
      : GetScalarType<T[P], AggregateMateria_Indicatore[P]>
  }




  export type Materia_IndicatoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_IndicatoreWhereInput
    orderBy?: Materia_IndicatoreOrderByWithAggregationInput | Materia_IndicatoreOrderByWithAggregationInput[]
    by: Materia_IndicatoreScalarFieldEnum[] | Materia_IndicatoreScalarFieldEnum
    having?: Materia_IndicatoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Materia_IndicatoreCountAggregateInputType | true
    _avg?: Materia_IndicatoreAvgAggregateInputType
    _sum?: Materia_IndicatoreSumAggregateInputType
    _min?: Materia_IndicatoreMinAggregateInputType
    _max?: Materia_IndicatoreMaxAggregateInputType
  }

  export type Materia_IndicatoreGroupByOutputType = {
    Materia_Nome: string
    Indicatore_Id: number
    Valore: boolean
    _count: Materia_IndicatoreCountAggregateOutputType | null
    _avg: Materia_IndicatoreAvgAggregateOutputType | null
    _sum: Materia_IndicatoreSumAggregateOutputType | null
    _min: Materia_IndicatoreMinAggregateOutputType | null
    _max: Materia_IndicatoreMaxAggregateOutputType | null
  }

  type GetMateria_IndicatoreGroupByPayload<T extends Materia_IndicatoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Materia_IndicatoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Materia_IndicatoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Materia_IndicatoreGroupByOutputType[P]>
            : GetScalarType<T[P], Materia_IndicatoreGroupByOutputType[P]>
        }
      >
    >


  export type Materia_IndicatoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Indicatore_Id?: boolean
    Valore?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Indicatore"]>

  export type Materia_IndicatoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Indicatore_Id?: boolean
    Valore?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Indicatore"]>

  export type Materia_IndicatoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Indicatore_Id?: boolean
    Valore?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Indicatore"]>

  export type Materia_IndicatoreSelectScalar = {
    Materia_Nome?: boolean
    Indicatore_Id?: boolean
    Valore?: boolean
  }

  export type Materia_IndicatoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Materia_Nome" | "Indicatore_Id" | "Valore", ExtArgs["result"]["materia_Indicatore"]>
  export type Materia_IndicatoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }
  export type Materia_IndicatoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }
  export type Materia_IndicatoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Indicatore?: boolean | IndicatoreDefaultArgs<ExtArgs>
  }

  export type $Materia_IndicatorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia_Indicatore"
    objects: {
      Materia: Prisma.$MateriaPayload<ExtArgs>
      Indicatore: Prisma.$IndicatorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Materia_Nome: string
      Indicatore_Id: number
      Valore: boolean
    }, ExtArgs["result"]["materia_Indicatore"]>
    composites: {}
  }

  type Materia_IndicatoreGetPayload<S extends boolean | null | undefined | Materia_IndicatoreDefaultArgs> = $Result.GetResult<Prisma.$Materia_IndicatorePayload, S>

  type Materia_IndicatoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Materia_IndicatoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Materia_IndicatoreCountAggregateInputType | true
    }

  export interface Materia_IndicatoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia_Indicatore'], meta: { name: 'Materia_Indicatore' } }
    /**
     * Find zero or one Materia_Indicatore that matches the filter.
     * @param {Materia_IndicatoreFindUniqueArgs} args - Arguments to find a Materia_Indicatore
     * @example
     * // Get one Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Materia_IndicatoreFindUniqueArgs>(args: SelectSubset<T, Materia_IndicatoreFindUniqueArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia_Indicatore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Materia_IndicatoreFindUniqueOrThrowArgs} args - Arguments to find a Materia_Indicatore
     * @example
     * // Get one Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Materia_IndicatoreFindUniqueOrThrowArgs>(args: SelectSubset<T, Materia_IndicatoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia_Indicatore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreFindFirstArgs} args - Arguments to find a Materia_Indicatore
     * @example
     * // Get one Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Materia_IndicatoreFindFirstArgs>(args?: SelectSubset<T, Materia_IndicatoreFindFirstArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia_Indicatore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreFindFirstOrThrowArgs} args - Arguments to find a Materia_Indicatore
     * @example
     * // Get one Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Materia_IndicatoreFindFirstOrThrowArgs>(args?: SelectSubset<T, Materia_IndicatoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materia_Indicatores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materia_Indicatores
     * const materia_Indicatores = await prisma.materia_Indicatore.findMany()
     * 
     * // Get first 10 Materia_Indicatores
     * const materia_Indicatores = await prisma.materia_Indicatore.findMany({ take: 10 })
     * 
     * // Only select the `Materia_Nome`
     * const materia_IndicatoreWithMateria_NomeOnly = await prisma.materia_Indicatore.findMany({ select: { Materia_Nome: true } })
     * 
     */
    findMany<T extends Materia_IndicatoreFindManyArgs>(args?: SelectSubset<T, Materia_IndicatoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia_Indicatore.
     * @param {Materia_IndicatoreCreateArgs} args - Arguments to create a Materia_Indicatore.
     * @example
     * // Create one Materia_Indicatore
     * const Materia_Indicatore = await prisma.materia_Indicatore.create({
     *   data: {
     *     // ... data to create a Materia_Indicatore
     *   }
     * })
     * 
     */
    create<T extends Materia_IndicatoreCreateArgs>(args: SelectSubset<T, Materia_IndicatoreCreateArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materia_Indicatores.
     * @param {Materia_IndicatoreCreateManyArgs} args - Arguments to create many Materia_Indicatores.
     * @example
     * // Create many Materia_Indicatores
     * const materia_Indicatore = await prisma.materia_Indicatore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Materia_IndicatoreCreateManyArgs>(args?: SelectSubset<T, Materia_IndicatoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materia_Indicatores and returns the data saved in the database.
     * @param {Materia_IndicatoreCreateManyAndReturnArgs} args - Arguments to create many Materia_Indicatores.
     * @example
     * // Create many Materia_Indicatores
     * const materia_Indicatore = await prisma.materia_Indicatore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materia_Indicatores and only return the `Materia_Nome`
     * const materia_IndicatoreWithMateria_NomeOnly = await prisma.materia_Indicatore.createManyAndReturn({
     *   select: { Materia_Nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Materia_IndicatoreCreateManyAndReturnArgs>(args?: SelectSubset<T, Materia_IndicatoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia_Indicatore.
     * @param {Materia_IndicatoreDeleteArgs} args - Arguments to delete one Materia_Indicatore.
     * @example
     * // Delete one Materia_Indicatore
     * const Materia_Indicatore = await prisma.materia_Indicatore.delete({
     *   where: {
     *     // ... filter to delete one Materia_Indicatore
     *   }
     * })
     * 
     */
    delete<T extends Materia_IndicatoreDeleteArgs>(args: SelectSubset<T, Materia_IndicatoreDeleteArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia_Indicatore.
     * @param {Materia_IndicatoreUpdateArgs} args - Arguments to update one Materia_Indicatore.
     * @example
     * // Update one Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Materia_IndicatoreUpdateArgs>(args: SelectSubset<T, Materia_IndicatoreUpdateArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materia_Indicatores.
     * @param {Materia_IndicatoreDeleteManyArgs} args - Arguments to filter Materia_Indicatores to delete.
     * @example
     * // Delete a few Materia_Indicatores
     * const { count } = await prisma.materia_Indicatore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Materia_IndicatoreDeleteManyArgs>(args?: SelectSubset<T, Materia_IndicatoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materia_Indicatores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materia_Indicatores
     * const materia_Indicatore = await prisma.materia_Indicatore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Materia_IndicatoreUpdateManyArgs>(args: SelectSubset<T, Materia_IndicatoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materia_Indicatores and returns the data updated in the database.
     * @param {Materia_IndicatoreUpdateManyAndReturnArgs} args - Arguments to update many Materia_Indicatores.
     * @example
     * // Update many Materia_Indicatores
     * const materia_Indicatore = await prisma.materia_Indicatore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materia_Indicatores and only return the `Materia_Nome`
     * const materia_IndicatoreWithMateria_NomeOnly = await prisma.materia_Indicatore.updateManyAndReturn({
     *   select: { Materia_Nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Materia_IndicatoreUpdateManyAndReturnArgs>(args: SelectSubset<T, Materia_IndicatoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia_Indicatore.
     * @param {Materia_IndicatoreUpsertArgs} args - Arguments to update or create a Materia_Indicatore.
     * @example
     * // Update or create a Materia_Indicatore
     * const materia_Indicatore = await prisma.materia_Indicatore.upsert({
     *   create: {
     *     // ... data to create a Materia_Indicatore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia_Indicatore we want to update
     *   }
     * })
     */
    upsert<T extends Materia_IndicatoreUpsertArgs>(args: SelectSubset<T, Materia_IndicatoreUpsertArgs<ExtArgs>>): Prisma__Materia_IndicatoreClient<$Result.GetResult<Prisma.$Materia_IndicatorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materia_Indicatores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreCountArgs} args - Arguments to filter Materia_Indicatores to count.
     * @example
     * // Count the number of Materia_Indicatores
     * const count = await prisma.materia_Indicatore.count({
     *   where: {
     *     // ... the filter for the Materia_Indicatores we want to count
     *   }
     * })
    **/
    count<T extends Materia_IndicatoreCountArgs>(
      args?: Subset<T, Materia_IndicatoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Materia_IndicatoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia_Indicatore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Materia_IndicatoreAggregateArgs>(args: Subset<T, Materia_IndicatoreAggregateArgs>): Prisma.PrismaPromise<GetMateria_IndicatoreAggregateType<T>>

    /**
     * Group by Materia_Indicatore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_IndicatoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Materia_IndicatoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Materia_IndicatoreGroupByArgs['orderBy'] }
        : { orderBy?: Materia_IndicatoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Materia_IndicatoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateria_IndicatoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia_Indicatore model
   */
  readonly fields: Materia_IndicatoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia_Indicatore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Materia_IndicatoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Indicatore<T extends IndicatoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndicatoreDefaultArgs<ExtArgs>>): Prisma__IndicatoreClient<$Result.GetResult<Prisma.$IndicatorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia_Indicatore model
   */
  interface Materia_IndicatoreFieldRefs {
    readonly Materia_Nome: FieldRef<"Materia_Indicatore", 'String'>
    readonly Indicatore_Id: FieldRef<"Materia_Indicatore", 'Int'>
    readonly Valore: FieldRef<"Materia_Indicatore", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Materia_Indicatore findUnique
   */
  export type Materia_IndicatoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Indicatore to fetch.
     */
    where: Materia_IndicatoreWhereUniqueInput
  }

  /**
   * Materia_Indicatore findUniqueOrThrow
   */
  export type Materia_IndicatoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Indicatore to fetch.
     */
    where: Materia_IndicatoreWhereUniqueInput
  }

  /**
   * Materia_Indicatore findFirst
   */
  export type Materia_IndicatoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Indicatore to fetch.
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Indicatores to fetch.
     */
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materia_Indicatores.
     */
    cursor?: Materia_IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materia_Indicatores.
     */
    distinct?: Materia_IndicatoreScalarFieldEnum | Materia_IndicatoreScalarFieldEnum[]
  }

  /**
   * Materia_Indicatore findFirstOrThrow
   */
  export type Materia_IndicatoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Indicatore to fetch.
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Indicatores to fetch.
     */
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materia_Indicatores.
     */
    cursor?: Materia_IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Indicatores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materia_Indicatores.
     */
    distinct?: Materia_IndicatoreScalarFieldEnum | Materia_IndicatoreScalarFieldEnum[]
  }

  /**
   * Materia_Indicatore findMany
   */
  export type Materia_IndicatoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Indicatores to fetch.
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Indicatores to fetch.
     */
    orderBy?: Materia_IndicatoreOrderByWithRelationInput | Materia_IndicatoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materia_Indicatores.
     */
    cursor?: Materia_IndicatoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Indicatores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Indicatores.
     */
    skip?: number
    distinct?: Materia_IndicatoreScalarFieldEnum | Materia_IndicatoreScalarFieldEnum[]
  }

  /**
   * Materia_Indicatore create
   */
  export type Materia_IndicatoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia_Indicatore.
     */
    data: XOR<Materia_IndicatoreCreateInput, Materia_IndicatoreUncheckedCreateInput>
  }

  /**
   * Materia_Indicatore createMany
   */
  export type Materia_IndicatoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materia_Indicatores.
     */
    data: Materia_IndicatoreCreateManyInput | Materia_IndicatoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia_Indicatore createManyAndReturn
   */
  export type Materia_IndicatoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * The data used to create many Materia_Indicatores.
     */
    data: Materia_IndicatoreCreateManyInput | Materia_IndicatoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia_Indicatore update
   */
  export type Materia_IndicatoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia_Indicatore.
     */
    data: XOR<Materia_IndicatoreUpdateInput, Materia_IndicatoreUncheckedUpdateInput>
    /**
     * Choose, which Materia_Indicatore to update.
     */
    where: Materia_IndicatoreWhereUniqueInput
  }

  /**
   * Materia_Indicatore updateMany
   */
  export type Materia_IndicatoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materia_Indicatores.
     */
    data: XOR<Materia_IndicatoreUpdateManyMutationInput, Materia_IndicatoreUncheckedUpdateManyInput>
    /**
     * Filter which Materia_Indicatores to update
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * Limit how many Materia_Indicatores to update.
     */
    limit?: number
  }

  /**
   * Materia_Indicatore updateManyAndReturn
   */
  export type Materia_IndicatoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * The data used to update Materia_Indicatores.
     */
    data: XOR<Materia_IndicatoreUpdateManyMutationInput, Materia_IndicatoreUncheckedUpdateManyInput>
    /**
     * Filter which Materia_Indicatores to update
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * Limit how many Materia_Indicatores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia_Indicatore upsert
   */
  export type Materia_IndicatoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia_Indicatore to update in case it exists.
     */
    where: Materia_IndicatoreWhereUniqueInput
    /**
     * In case the Materia_Indicatore found by the `where` argument doesn't exist, create a new Materia_Indicatore with this data.
     */
    create: XOR<Materia_IndicatoreCreateInput, Materia_IndicatoreUncheckedCreateInput>
    /**
     * In case the Materia_Indicatore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Materia_IndicatoreUpdateInput, Materia_IndicatoreUncheckedUpdateInput>
  }

  /**
   * Materia_Indicatore delete
   */
  export type Materia_IndicatoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
    /**
     * Filter which Materia_Indicatore to delete.
     */
    where: Materia_IndicatoreWhereUniqueInput
  }

  /**
   * Materia_Indicatore deleteMany
   */
  export type Materia_IndicatoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia_Indicatores to delete
     */
    where?: Materia_IndicatoreWhereInput
    /**
     * Limit how many Materia_Indicatores to delete.
     */
    limit?: number
  }

  /**
   * Materia_Indicatore without action
   */
  export type Materia_IndicatoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Indicatore
     */
    select?: Materia_IndicatoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Indicatore
     */
    omit?: Materia_IndicatoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_IndicatoreInclude<ExtArgs> | null
  }


  /**
   * Model Materia_Documento
   */

  export type AggregateMateria_Documento = {
    _count: Materia_DocumentoCountAggregateOutputType | null
    _min: Materia_DocumentoMinAggregateOutputType | null
    _max: Materia_DocumentoMaxAggregateOutputType | null
  }

  export type Materia_DocumentoMinAggregateOutputType = {
    Materia_Nome: string | null
    Documento_Anno: Date | null
    Documento_Studente_Email: string | null
  }

  export type Materia_DocumentoMaxAggregateOutputType = {
    Materia_Nome: string | null
    Documento_Anno: Date | null
    Documento_Studente_Email: string | null
  }

  export type Materia_DocumentoCountAggregateOutputType = {
    Materia_Nome: number
    Documento_Anno: number
    Documento_Studente_Email: number
    _all: number
  }


  export type Materia_DocumentoMinAggregateInputType = {
    Materia_Nome?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
  }

  export type Materia_DocumentoMaxAggregateInputType = {
    Materia_Nome?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
  }

  export type Materia_DocumentoCountAggregateInputType = {
    Materia_Nome?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
    _all?: true
  }

  export type Materia_DocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia_Documento to aggregate.
     */
    where?: Materia_DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Documentos to fetch.
     */
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Materia_DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materia_Documentos
    **/
    _count?: true | Materia_DocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Materia_DocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Materia_DocumentoMaxAggregateInputType
  }

  export type GetMateria_DocumentoAggregateType<T extends Materia_DocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria_Documento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria_Documento[P]>
      : GetScalarType<T[P], AggregateMateria_Documento[P]>
  }




  export type Materia_DocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Materia_DocumentoWhereInput
    orderBy?: Materia_DocumentoOrderByWithAggregationInput | Materia_DocumentoOrderByWithAggregationInput[]
    by: Materia_DocumentoScalarFieldEnum[] | Materia_DocumentoScalarFieldEnum
    having?: Materia_DocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Materia_DocumentoCountAggregateInputType | true
    _min?: Materia_DocumentoMinAggregateInputType
    _max?: Materia_DocumentoMaxAggregateInputType
  }

  export type Materia_DocumentoGroupByOutputType = {
    Materia_Nome: string
    Documento_Anno: Date
    Documento_Studente_Email: string
    _count: Materia_DocumentoCountAggregateOutputType | null
    _min: Materia_DocumentoMinAggregateOutputType | null
    _max: Materia_DocumentoMaxAggregateOutputType | null
  }

  type GetMateria_DocumentoGroupByPayload<T extends Materia_DocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Materia_DocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Materia_DocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Materia_DocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], Materia_DocumentoGroupByOutputType[P]>
        }
      >
    >


  export type Materia_DocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Documento"]>

  export type Materia_DocumentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Documento"]>

  export type Materia_DocumentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Materia_Nome?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia_Documento"]>

  export type Materia_DocumentoSelectScalar = {
    Materia_Nome?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
  }

  export type Materia_DocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Materia_Nome" | "Documento_Anno" | "Documento_Studente_Email", ExtArgs["result"]["materia_Documento"]>
  export type Materia_DocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type Materia_DocumentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type Materia_DocumentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Materia?: boolean | MateriaDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }

  export type $Materia_DocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia_Documento"
    objects: {
      Materia: Prisma.$MateriaPayload<ExtArgs>
      Documento: Prisma.$DocumentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Materia_Nome: string
      Documento_Anno: Date
      Documento_Studente_Email: string
    }, ExtArgs["result"]["materia_Documento"]>
    composites: {}
  }

  type Materia_DocumentoGetPayload<S extends boolean | null | undefined | Materia_DocumentoDefaultArgs> = $Result.GetResult<Prisma.$Materia_DocumentoPayload, S>

  type Materia_DocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Materia_DocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Materia_DocumentoCountAggregateInputType | true
    }

  export interface Materia_DocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia_Documento'], meta: { name: 'Materia_Documento' } }
    /**
     * Find zero or one Materia_Documento that matches the filter.
     * @param {Materia_DocumentoFindUniqueArgs} args - Arguments to find a Materia_Documento
     * @example
     * // Get one Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Materia_DocumentoFindUniqueArgs>(args: SelectSubset<T, Materia_DocumentoFindUniqueArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia_Documento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Materia_DocumentoFindUniqueOrThrowArgs} args - Arguments to find a Materia_Documento
     * @example
     * // Get one Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Materia_DocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, Materia_DocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia_Documento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoFindFirstArgs} args - Arguments to find a Materia_Documento
     * @example
     * // Get one Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Materia_DocumentoFindFirstArgs>(args?: SelectSubset<T, Materia_DocumentoFindFirstArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia_Documento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoFindFirstOrThrowArgs} args - Arguments to find a Materia_Documento
     * @example
     * // Get one Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Materia_DocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, Materia_DocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materia_Documentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materia_Documentos
     * const materia_Documentos = await prisma.materia_Documento.findMany()
     * 
     * // Get first 10 Materia_Documentos
     * const materia_Documentos = await prisma.materia_Documento.findMany({ take: 10 })
     * 
     * // Only select the `Materia_Nome`
     * const materia_DocumentoWithMateria_NomeOnly = await prisma.materia_Documento.findMany({ select: { Materia_Nome: true } })
     * 
     */
    findMany<T extends Materia_DocumentoFindManyArgs>(args?: SelectSubset<T, Materia_DocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia_Documento.
     * @param {Materia_DocumentoCreateArgs} args - Arguments to create a Materia_Documento.
     * @example
     * // Create one Materia_Documento
     * const Materia_Documento = await prisma.materia_Documento.create({
     *   data: {
     *     // ... data to create a Materia_Documento
     *   }
     * })
     * 
     */
    create<T extends Materia_DocumentoCreateArgs>(args: SelectSubset<T, Materia_DocumentoCreateArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materia_Documentos.
     * @param {Materia_DocumentoCreateManyArgs} args - Arguments to create many Materia_Documentos.
     * @example
     * // Create many Materia_Documentos
     * const materia_Documento = await prisma.materia_Documento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Materia_DocumentoCreateManyArgs>(args?: SelectSubset<T, Materia_DocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materia_Documentos and returns the data saved in the database.
     * @param {Materia_DocumentoCreateManyAndReturnArgs} args - Arguments to create many Materia_Documentos.
     * @example
     * // Create many Materia_Documentos
     * const materia_Documento = await prisma.materia_Documento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materia_Documentos and only return the `Materia_Nome`
     * const materia_DocumentoWithMateria_NomeOnly = await prisma.materia_Documento.createManyAndReturn({
     *   select: { Materia_Nome: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Materia_DocumentoCreateManyAndReturnArgs>(args?: SelectSubset<T, Materia_DocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia_Documento.
     * @param {Materia_DocumentoDeleteArgs} args - Arguments to delete one Materia_Documento.
     * @example
     * // Delete one Materia_Documento
     * const Materia_Documento = await prisma.materia_Documento.delete({
     *   where: {
     *     // ... filter to delete one Materia_Documento
     *   }
     * })
     * 
     */
    delete<T extends Materia_DocumentoDeleteArgs>(args: SelectSubset<T, Materia_DocumentoDeleteArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia_Documento.
     * @param {Materia_DocumentoUpdateArgs} args - Arguments to update one Materia_Documento.
     * @example
     * // Update one Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Materia_DocumentoUpdateArgs>(args: SelectSubset<T, Materia_DocumentoUpdateArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materia_Documentos.
     * @param {Materia_DocumentoDeleteManyArgs} args - Arguments to filter Materia_Documentos to delete.
     * @example
     * // Delete a few Materia_Documentos
     * const { count } = await prisma.materia_Documento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Materia_DocumentoDeleteManyArgs>(args?: SelectSubset<T, Materia_DocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materia_Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materia_Documentos
     * const materia_Documento = await prisma.materia_Documento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Materia_DocumentoUpdateManyArgs>(args: SelectSubset<T, Materia_DocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materia_Documentos and returns the data updated in the database.
     * @param {Materia_DocumentoUpdateManyAndReturnArgs} args - Arguments to update many Materia_Documentos.
     * @example
     * // Update many Materia_Documentos
     * const materia_Documento = await prisma.materia_Documento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materia_Documentos and only return the `Materia_Nome`
     * const materia_DocumentoWithMateria_NomeOnly = await prisma.materia_Documento.updateManyAndReturn({
     *   select: { Materia_Nome: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Materia_DocumentoUpdateManyAndReturnArgs>(args: SelectSubset<T, Materia_DocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia_Documento.
     * @param {Materia_DocumentoUpsertArgs} args - Arguments to update or create a Materia_Documento.
     * @example
     * // Update or create a Materia_Documento
     * const materia_Documento = await prisma.materia_Documento.upsert({
     *   create: {
     *     // ... data to create a Materia_Documento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia_Documento we want to update
     *   }
     * })
     */
    upsert<T extends Materia_DocumentoUpsertArgs>(args: SelectSubset<T, Materia_DocumentoUpsertArgs<ExtArgs>>): Prisma__Materia_DocumentoClient<$Result.GetResult<Prisma.$Materia_DocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materia_Documentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoCountArgs} args - Arguments to filter Materia_Documentos to count.
     * @example
     * // Count the number of Materia_Documentos
     * const count = await prisma.materia_Documento.count({
     *   where: {
     *     // ... the filter for the Materia_Documentos we want to count
     *   }
     * })
    **/
    count<T extends Materia_DocumentoCountArgs>(
      args?: Subset<T, Materia_DocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Materia_DocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia_Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Materia_DocumentoAggregateArgs>(args: Subset<T, Materia_DocumentoAggregateArgs>): Prisma.PrismaPromise<GetMateria_DocumentoAggregateType<T>>

    /**
     * Group by Materia_Documento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Materia_DocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Materia_DocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Materia_DocumentoGroupByArgs['orderBy'] }
        : { orderBy?: Materia_DocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Materia_DocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateria_DocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia_Documento model
   */
  readonly fields: Materia_DocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia_Documento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Materia_DocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Documento<T extends DocumentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentoDefaultArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia_Documento model
   */
  interface Materia_DocumentoFieldRefs {
    readonly Materia_Nome: FieldRef<"Materia_Documento", 'String'>
    readonly Documento_Anno: FieldRef<"Materia_Documento", 'DateTime'>
    readonly Documento_Studente_Email: FieldRef<"Materia_Documento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Materia_Documento findUnique
   */
  export type Materia_DocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Documento to fetch.
     */
    where: Materia_DocumentoWhereUniqueInput
  }

  /**
   * Materia_Documento findUniqueOrThrow
   */
  export type Materia_DocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Documento to fetch.
     */
    where: Materia_DocumentoWhereUniqueInput
  }

  /**
   * Materia_Documento findFirst
   */
  export type Materia_DocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Documento to fetch.
     */
    where?: Materia_DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Documentos to fetch.
     */
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materia_Documentos.
     */
    cursor?: Materia_DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materia_Documentos.
     */
    distinct?: Materia_DocumentoScalarFieldEnum | Materia_DocumentoScalarFieldEnum[]
  }

  /**
   * Materia_Documento findFirstOrThrow
   */
  export type Materia_DocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Documento to fetch.
     */
    where?: Materia_DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Documentos to fetch.
     */
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materia_Documentos.
     */
    cursor?: Materia_DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Documentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materia_Documentos.
     */
    distinct?: Materia_DocumentoScalarFieldEnum | Materia_DocumentoScalarFieldEnum[]
  }

  /**
   * Materia_Documento findMany
   */
  export type Materia_DocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter, which Materia_Documentos to fetch.
     */
    where?: Materia_DocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materia_Documentos to fetch.
     */
    orderBy?: Materia_DocumentoOrderByWithRelationInput | Materia_DocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materia_Documentos.
     */
    cursor?: Materia_DocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materia_Documentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materia_Documentos.
     */
    skip?: number
    distinct?: Materia_DocumentoScalarFieldEnum | Materia_DocumentoScalarFieldEnum[]
  }

  /**
   * Materia_Documento create
   */
  export type Materia_DocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia_Documento.
     */
    data: XOR<Materia_DocumentoCreateInput, Materia_DocumentoUncheckedCreateInput>
  }

  /**
   * Materia_Documento createMany
   */
  export type Materia_DocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materia_Documentos.
     */
    data: Materia_DocumentoCreateManyInput | Materia_DocumentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia_Documento createManyAndReturn
   */
  export type Materia_DocumentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * The data used to create many Materia_Documentos.
     */
    data: Materia_DocumentoCreateManyInput | Materia_DocumentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia_Documento update
   */
  export type Materia_DocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia_Documento.
     */
    data: XOR<Materia_DocumentoUpdateInput, Materia_DocumentoUncheckedUpdateInput>
    /**
     * Choose, which Materia_Documento to update.
     */
    where: Materia_DocumentoWhereUniqueInput
  }

  /**
   * Materia_Documento updateMany
   */
  export type Materia_DocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materia_Documentos.
     */
    data: XOR<Materia_DocumentoUpdateManyMutationInput, Materia_DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Materia_Documentos to update
     */
    where?: Materia_DocumentoWhereInput
    /**
     * Limit how many Materia_Documentos to update.
     */
    limit?: number
  }

  /**
   * Materia_Documento updateManyAndReturn
   */
  export type Materia_DocumentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * The data used to update Materia_Documentos.
     */
    data: XOR<Materia_DocumentoUpdateManyMutationInput, Materia_DocumentoUncheckedUpdateManyInput>
    /**
     * Filter which Materia_Documentos to update
     */
    where?: Materia_DocumentoWhereInput
    /**
     * Limit how many Materia_Documentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia_Documento upsert
   */
  export type Materia_DocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia_Documento to update in case it exists.
     */
    where: Materia_DocumentoWhereUniqueInput
    /**
     * In case the Materia_Documento found by the `where` argument doesn't exist, create a new Materia_Documento with this data.
     */
    create: XOR<Materia_DocumentoCreateInput, Materia_DocumentoUncheckedCreateInput>
    /**
     * In case the Materia_Documento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Materia_DocumentoUpdateInput, Materia_DocumentoUncheckedUpdateInput>
  }

  /**
   * Materia_Documento delete
   */
  export type Materia_DocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
    /**
     * Filter which Materia_Documento to delete.
     */
    where: Materia_DocumentoWhereUniqueInput
  }

  /**
   * Materia_Documento deleteMany
   */
  export type Materia_DocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia_Documentos to delete
     */
    where?: Materia_DocumentoWhereInput
    /**
     * Limit how many Materia_Documentos to delete.
     */
    limit?: number
  }

  /**
   * Materia_Documento without action
   */
  export type Materia_DocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia_Documento
     */
    select?: Materia_DocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia_Documento
     */
    omit?: Materia_DocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Materia_DocumentoInclude<ExtArgs> | null
  }


  /**
   * Model Documento_ICF
   */

  export type AggregateDocumento_ICF = {
    _count: Documento_ICFCountAggregateOutputType | null
    _min: Documento_ICFMinAggregateOutputType | null
    _max: Documento_ICFMaxAggregateOutputType | null
  }

  export type Documento_ICFMinAggregateOutputType = {
    ICF_Codice: string | null
    Documento_Anno: Date | null
    Documento_Studente_Email: string | null
  }

  export type Documento_ICFMaxAggregateOutputType = {
    ICF_Codice: string | null
    Documento_Anno: Date | null
    Documento_Studente_Email: string | null
  }

  export type Documento_ICFCountAggregateOutputType = {
    ICF_Codice: number
    Documento_Anno: number
    Documento_Studente_Email: number
    _all: number
  }


  export type Documento_ICFMinAggregateInputType = {
    ICF_Codice?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
  }

  export type Documento_ICFMaxAggregateInputType = {
    ICF_Codice?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
  }

  export type Documento_ICFCountAggregateInputType = {
    ICF_Codice?: true
    Documento_Anno?: true
    Documento_Studente_Email?: true
    _all?: true
  }

  export type Documento_ICFAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento_ICF to aggregate.
     */
    where?: Documento_ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documento_ICFS to fetch.
     */
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Documento_ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documento_ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documento_ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documento_ICFS
    **/
    _count?: true | Documento_ICFCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Documento_ICFMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Documento_ICFMaxAggregateInputType
  }

  export type GetDocumento_ICFAggregateType<T extends Documento_ICFAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumento_ICF]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumento_ICF[P]>
      : GetScalarType<T[P], AggregateDocumento_ICF[P]>
  }




  export type Documento_ICFGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Documento_ICFWhereInput
    orderBy?: Documento_ICFOrderByWithAggregationInput | Documento_ICFOrderByWithAggregationInput[]
    by: Documento_ICFScalarFieldEnum[] | Documento_ICFScalarFieldEnum
    having?: Documento_ICFScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Documento_ICFCountAggregateInputType | true
    _min?: Documento_ICFMinAggregateInputType
    _max?: Documento_ICFMaxAggregateInputType
  }

  export type Documento_ICFGroupByOutputType = {
    ICF_Codice: string
    Documento_Anno: Date
    Documento_Studente_Email: string
    _count: Documento_ICFCountAggregateOutputType | null
    _min: Documento_ICFMinAggregateOutputType | null
    _max: Documento_ICFMaxAggregateOutputType | null
  }

  type GetDocumento_ICFGroupByPayload<T extends Documento_ICFGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Documento_ICFGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Documento_ICFGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Documento_ICFGroupByOutputType[P]>
            : GetScalarType<T[P], Documento_ICFGroupByOutputType[P]>
        }
      >
    >


  export type Documento_ICFSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ICF_Codice?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento_ICF"]>

  export type Documento_ICFSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ICF_Codice?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento_ICF"]>

  export type Documento_ICFSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ICF_Codice?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documento_ICF"]>

  export type Documento_ICFSelectScalar = {
    ICF_Codice?: boolean
    Documento_Anno?: boolean
    Documento_Studente_Email?: boolean
  }

  export type Documento_ICFOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ICF_Codice" | "Documento_Anno" | "Documento_Studente_Email", ExtArgs["result"]["documento_ICF"]>
  export type Documento_ICFInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type Documento_ICFIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }
  export type Documento_ICFIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ICF?: boolean | ICFDefaultArgs<ExtArgs>
    Documento?: boolean | DocumentoDefaultArgs<ExtArgs>
  }

  export type $Documento_ICFPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documento_ICF"
    objects: {
      ICF: Prisma.$ICFPayload<ExtArgs>
      Documento: Prisma.$DocumentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ICF_Codice: string
      Documento_Anno: Date
      Documento_Studente_Email: string
    }, ExtArgs["result"]["documento_ICF"]>
    composites: {}
  }

  type Documento_ICFGetPayload<S extends boolean | null | undefined | Documento_ICFDefaultArgs> = $Result.GetResult<Prisma.$Documento_ICFPayload, S>

  type Documento_ICFCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Documento_ICFFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Documento_ICFCountAggregateInputType | true
    }

  export interface Documento_ICFDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documento_ICF'], meta: { name: 'Documento_ICF' } }
    /**
     * Find zero or one Documento_ICF that matches the filter.
     * @param {Documento_ICFFindUniqueArgs} args - Arguments to find a Documento_ICF
     * @example
     * // Get one Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Documento_ICFFindUniqueArgs>(args: SelectSubset<T, Documento_ICFFindUniqueArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documento_ICF that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Documento_ICFFindUniqueOrThrowArgs} args - Arguments to find a Documento_ICF
     * @example
     * // Get one Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Documento_ICFFindUniqueOrThrowArgs>(args: SelectSubset<T, Documento_ICFFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento_ICF that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFFindFirstArgs} args - Arguments to find a Documento_ICF
     * @example
     * // Get one Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Documento_ICFFindFirstArgs>(args?: SelectSubset<T, Documento_ICFFindFirstArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documento_ICF that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFFindFirstOrThrowArgs} args - Arguments to find a Documento_ICF
     * @example
     * // Get one Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Documento_ICFFindFirstOrThrowArgs>(args?: SelectSubset<T, Documento_ICFFindFirstOrThrowArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documento_ICFS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documento_ICFS
     * const documento_ICFS = await prisma.documento_ICF.findMany()
     * 
     * // Get first 10 Documento_ICFS
     * const documento_ICFS = await prisma.documento_ICF.findMany({ take: 10 })
     * 
     * // Only select the `ICF_Codice`
     * const documento_ICFWithICF_CodiceOnly = await prisma.documento_ICF.findMany({ select: { ICF_Codice: true } })
     * 
     */
    findMany<T extends Documento_ICFFindManyArgs>(args?: SelectSubset<T, Documento_ICFFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documento_ICF.
     * @param {Documento_ICFCreateArgs} args - Arguments to create a Documento_ICF.
     * @example
     * // Create one Documento_ICF
     * const Documento_ICF = await prisma.documento_ICF.create({
     *   data: {
     *     // ... data to create a Documento_ICF
     *   }
     * })
     * 
     */
    create<T extends Documento_ICFCreateArgs>(args: SelectSubset<T, Documento_ICFCreateArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documento_ICFS.
     * @param {Documento_ICFCreateManyArgs} args - Arguments to create many Documento_ICFS.
     * @example
     * // Create many Documento_ICFS
     * const documento_ICF = await prisma.documento_ICF.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Documento_ICFCreateManyArgs>(args?: SelectSubset<T, Documento_ICFCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documento_ICFS and returns the data saved in the database.
     * @param {Documento_ICFCreateManyAndReturnArgs} args - Arguments to create many Documento_ICFS.
     * @example
     * // Create many Documento_ICFS
     * const documento_ICF = await prisma.documento_ICF.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documento_ICFS and only return the `ICF_Codice`
     * const documento_ICFWithICF_CodiceOnly = await prisma.documento_ICF.createManyAndReturn({
     *   select: { ICF_Codice: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Documento_ICFCreateManyAndReturnArgs>(args?: SelectSubset<T, Documento_ICFCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documento_ICF.
     * @param {Documento_ICFDeleteArgs} args - Arguments to delete one Documento_ICF.
     * @example
     * // Delete one Documento_ICF
     * const Documento_ICF = await prisma.documento_ICF.delete({
     *   where: {
     *     // ... filter to delete one Documento_ICF
     *   }
     * })
     * 
     */
    delete<T extends Documento_ICFDeleteArgs>(args: SelectSubset<T, Documento_ICFDeleteArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documento_ICF.
     * @param {Documento_ICFUpdateArgs} args - Arguments to update one Documento_ICF.
     * @example
     * // Update one Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Documento_ICFUpdateArgs>(args: SelectSubset<T, Documento_ICFUpdateArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documento_ICFS.
     * @param {Documento_ICFDeleteManyArgs} args - Arguments to filter Documento_ICFS to delete.
     * @example
     * // Delete a few Documento_ICFS
     * const { count } = await prisma.documento_ICF.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Documento_ICFDeleteManyArgs>(args?: SelectSubset<T, Documento_ICFDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documento_ICFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documento_ICFS
     * const documento_ICF = await prisma.documento_ICF.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Documento_ICFUpdateManyArgs>(args: SelectSubset<T, Documento_ICFUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documento_ICFS and returns the data updated in the database.
     * @param {Documento_ICFUpdateManyAndReturnArgs} args - Arguments to update many Documento_ICFS.
     * @example
     * // Update many Documento_ICFS
     * const documento_ICF = await prisma.documento_ICF.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documento_ICFS and only return the `ICF_Codice`
     * const documento_ICFWithICF_CodiceOnly = await prisma.documento_ICF.updateManyAndReturn({
     *   select: { ICF_Codice: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Documento_ICFUpdateManyAndReturnArgs>(args: SelectSubset<T, Documento_ICFUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documento_ICF.
     * @param {Documento_ICFUpsertArgs} args - Arguments to update or create a Documento_ICF.
     * @example
     * // Update or create a Documento_ICF
     * const documento_ICF = await prisma.documento_ICF.upsert({
     *   create: {
     *     // ... data to create a Documento_ICF
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documento_ICF we want to update
     *   }
     * })
     */
    upsert<T extends Documento_ICFUpsertArgs>(args: SelectSubset<T, Documento_ICFUpsertArgs<ExtArgs>>): Prisma__Documento_ICFClient<$Result.GetResult<Prisma.$Documento_ICFPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documento_ICFS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFCountArgs} args - Arguments to filter Documento_ICFS to count.
     * @example
     * // Count the number of Documento_ICFS
     * const count = await prisma.documento_ICF.count({
     *   where: {
     *     // ... the filter for the Documento_ICFS we want to count
     *   }
     * })
    **/
    count<T extends Documento_ICFCountArgs>(
      args?: Subset<T, Documento_ICFCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Documento_ICFCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documento_ICF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Documento_ICFAggregateArgs>(args: Subset<T, Documento_ICFAggregateArgs>): Prisma.PrismaPromise<GetDocumento_ICFAggregateType<T>>

    /**
     * Group by Documento_ICF.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documento_ICFGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Documento_ICFGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Documento_ICFGroupByArgs['orderBy'] }
        : { orderBy?: Documento_ICFGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Documento_ICFGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumento_ICFGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documento_ICF model
   */
  readonly fields: Documento_ICFFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documento_ICF.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Documento_ICFClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ICF<T extends ICFDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ICFDefaultArgs<ExtArgs>>): Prisma__ICFClient<$Result.GetResult<Prisma.$ICFPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Documento<T extends DocumentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentoDefaultArgs<ExtArgs>>): Prisma__DocumentoClient<$Result.GetResult<Prisma.$DocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Documento_ICF model
   */
  interface Documento_ICFFieldRefs {
    readonly ICF_Codice: FieldRef<"Documento_ICF", 'String'>
    readonly Documento_Anno: FieldRef<"Documento_ICF", 'DateTime'>
    readonly Documento_Studente_Email: FieldRef<"Documento_ICF", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Documento_ICF findUnique
   */
  export type Documento_ICFFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter, which Documento_ICF to fetch.
     */
    where: Documento_ICFWhereUniqueInput
  }

  /**
   * Documento_ICF findUniqueOrThrow
   */
  export type Documento_ICFFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter, which Documento_ICF to fetch.
     */
    where: Documento_ICFWhereUniqueInput
  }

  /**
   * Documento_ICF findFirst
   */
  export type Documento_ICFFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter, which Documento_ICF to fetch.
     */
    where?: Documento_ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documento_ICFS to fetch.
     */
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documento_ICFS.
     */
    cursor?: Documento_ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documento_ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documento_ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documento_ICFS.
     */
    distinct?: Documento_ICFScalarFieldEnum | Documento_ICFScalarFieldEnum[]
  }

  /**
   * Documento_ICF findFirstOrThrow
   */
  export type Documento_ICFFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter, which Documento_ICF to fetch.
     */
    where?: Documento_ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documento_ICFS to fetch.
     */
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documento_ICFS.
     */
    cursor?: Documento_ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documento_ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documento_ICFS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documento_ICFS.
     */
    distinct?: Documento_ICFScalarFieldEnum | Documento_ICFScalarFieldEnum[]
  }

  /**
   * Documento_ICF findMany
   */
  export type Documento_ICFFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter, which Documento_ICFS to fetch.
     */
    where?: Documento_ICFWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documento_ICFS to fetch.
     */
    orderBy?: Documento_ICFOrderByWithRelationInput | Documento_ICFOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documento_ICFS.
     */
    cursor?: Documento_ICFWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documento_ICFS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documento_ICFS.
     */
    skip?: number
    distinct?: Documento_ICFScalarFieldEnum | Documento_ICFScalarFieldEnum[]
  }

  /**
   * Documento_ICF create
   */
  export type Documento_ICFCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * The data needed to create a Documento_ICF.
     */
    data: XOR<Documento_ICFCreateInput, Documento_ICFUncheckedCreateInput>
  }

  /**
   * Documento_ICF createMany
   */
  export type Documento_ICFCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documento_ICFS.
     */
    data: Documento_ICFCreateManyInput | Documento_ICFCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documento_ICF createManyAndReturn
   */
  export type Documento_ICFCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * The data used to create many Documento_ICFS.
     */
    data: Documento_ICFCreateManyInput | Documento_ICFCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento_ICF update
   */
  export type Documento_ICFUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * The data needed to update a Documento_ICF.
     */
    data: XOR<Documento_ICFUpdateInput, Documento_ICFUncheckedUpdateInput>
    /**
     * Choose, which Documento_ICF to update.
     */
    where: Documento_ICFWhereUniqueInput
  }

  /**
   * Documento_ICF updateMany
   */
  export type Documento_ICFUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documento_ICFS.
     */
    data: XOR<Documento_ICFUpdateManyMutationInput, Documento_ICFUncheckedUpdateManyInput>
    /**
     * Filter which Documento_ICFS to update
     */
    where?: Documento_ICFWhereInput
    /**
     * Limit how many Documento_ICFS to update.
     */
    limit?: number
  }

  /**
   * Documento_ICF updateManyAndReturn
   */
  export type Documento_ICFUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * The data used to update Documento_ICFS.
     */
    data: XOR<Documento_ICFUpdateManyMutationInput, Documento_ICFUncheckedUpdateManyInput>
    /**
     * Filter which Documento_ICFS to update
     */
    where?: Documento_ICFWhereInput
    /**
     * Limit how many Documento_ICFS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Documento_ICF upsert
   */
  export type Documento_ICFUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * The filter to search for the Documento_ICF to update in case it exists.
     */
    where: Documento_ICFWhereUniqueInput
    /**
     * In case the Documento_ICF found by the `where` argument doesn't exist, create a new Documento_ICF with this data.
     */
    create: XOR<Documento_ICFCreateInput, Documento_ICFUncheckedCreateInput>
    /**
     * In case the Documento_ICF was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Documento_ICFUpdateInput, Documento_ICFUncheckedUpdateInput>
  }

  /**
   * Documento_ICF delete
   */
  export type Documento_ICFDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
    /**
     * Filter which Documento_ICF to delete.
     */
    where: Documento_ICFWhereUniqueInput
  }

  /**
   * Documento_ICF deleteMany
   */
  export type Documento_ICFDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documento_ICFS to delete
     */
    where?: Documento_ICFWhereInput
    /**
     * Limit how many Documento_ICFS to delete.
     */
    limit?: number
  }

  /**
   * Documento_ICF without action
   */
  export type Documento_ICFDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documento_ICF
     */
    select?: Documento_ICFSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documento_ICF
     */
    omit?: Documento_ICFOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Documento_ICFInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocenteScalarFieldEnum: {
    Email: 'Email',
    Nome: 'Nome',
    Cognome: 'Cognome'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const ClasseScalarFieldEnum: {
    Id: 'Id',
    Classe: 'Classe',
    Sezione: 'Sezione',
    Indirizzo: 'Indirizzo',
    Anno_Scolastico: 'Anno_Scolastico'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const StudenteScalarFieldEnum: {
    Email: 'Email',
    Nome: 'Nome',
    Cognome: 'Cognome',
    DSA_BES: 'DSA_BES'
  };

  export type StudenteScalarFieldEnum = (typeof StudenteScalarFieldEnum)[keyof typeof StudenteScalarFieldEnum]


  export const DocumentoScalarFieldEnum: {
    Studente_Email: 'Studente_Email',
    Anno: 'Anno',
    Stato: 'Stato',
    Tipologia: 'Tipologia',
    Data_Approvazione: 'Data_Approvazione'
  };

  export type DocumentoScalarFieldEnum = (typeof DocumentoScalarFieldEnum)[keyof typeof DocumentoScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    Nome: 'Nome'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const IndicatoreScalarFieldEnum: {
    Id: 'Id',
    Tipologia: 'Tipologia',
    Categoria: 'Categoria',
    Descrizione: 'Descrizione'
  };

  export type IndicatoreScalarFieldEnum = (typeof IndicatoreScalarFieldEnum)[keyof typeof IndicatoreScalarFieldEnum]


  export const AllegatoScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome',
    Percorso: 'Percorso',
    Documento_Studente_Email: 'Documento_Studente_Email',
    Documento_Anno: 'Documento_Anno'
  };

  export type AllegatoScalarFieldEnum = (typeof AllegatoScalarFieldEnum)[keyof typeof AllegatoScalarFieldEnum]


  export const ICFScalarFieldEnum: {
    Codice: 'Codice',
    Descrizione: 'Descrizione'
  };

  export type ICFScalarFieldEnum = (typeof ICFScalarFieldEnum)[keyof typeof ICFScalarFieldEnum]


  export const InsegnamentoScalarFieldEnum: {
    Docente_Email: 'Docente_Email',
    Classe_Id: 'Classe_Id',
    Materia_Nome: 'Materia_Nome'
  };

  export type InsegnamentoScalarFieldEnum = (typeof InsegnamentoScalarFieldEnum)[keyof typeof InsegnamentoScalarFieldEnum]


  export const Classe_StudenteScalarFieldEnum: {
    Classe_Id: 'Classe_Id',
    Studente_Email: 'Studente_Email'
  };

  export type Classe_StudenteScalarFieldEnum = (typeof Classe_StudenteScalarFieldEnum)[keyof typeof Classe_StudenteScalarFieldEnum]


  export const Materia_IndicatoreScalarFieldEnum: {
    Materia_Nome: 'Materia_Nome',
    Indicatore_Id: 'Indicatore_Id',
    Valore: 'Valore'
  };

  export type Materia_IndicatoreScalarFieldEnum = (typeof Materia_IndicatoreScalarFieldEnum)[keyof typeof Materia_IndicatoreScalarFieldEnum]


  export const Materia_DocumentoScalarFieldEnum: {
    Materia_Nome: 'Materia_Nome',
    Documento_Anno: 'Documento_Anno',
    Documento_Studente_Email: 'Documento_Studente_Email'
  };

  export type Materia_DocumentoScalarFieldEnum = (typeof Materia_DocumentoScalarFieldEnum)[keyof typeof Materia_DocumentoScalarFieldEnum]


  export const Documento_ICFScalarFieldEnum: {
    ICF_Codice: 'ICF_Codice',
    Documento_Anno: 'Documento_Anno',
    Documento_Studente_Email: 'Documento_Studente_Email'
  };

  export type Documento_ICFScalarFieldEnum = (typeof Documento_ICFScalarFieldEnum)[keyof typeof Documento_ICFScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Stato'
   */
  export type EnumStatoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stato'>
    


  /**
   * Reference to a field of type 'Stato[]'
   */
  export type ListEnumStatoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stato[]'>
    


  /**
   * Reference to a field of type 'Tipologia_Doc'
   */
  export type EnumTipologia_DocFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipologia_Doc'>
    


  /**
   * Reference to a field of type 'Tipologia_Doc[]'
   */
  export type ListEnumTipologia_DocFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipologia_Doc[]'>
    


  /**
   * Reference to a field of type 'Tipologia_Ind'
   */
  export type EnumTipologia_IndFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipologia_Ind'>
    


  /**
   * Reference to a field of type 'Tipologia_Ind[]'
   */
  export type ListEnumTipologia_IndFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tipologia_Ind[]'>
    


  /**
   * Reference to a field of type 'Categoria'
   */
  export type EnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria'>
    


  /**
   * Reference to a field of type 'Categoria[]'
   */
  export type ListEnumCategoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Categoria[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    Email?: StringFilter<"Docente"> | string
    Nome?: StringFilter<"Docente"> | string
    Cognome?: StringFilter<"Docente"> | string
    Insegnamenti?: InsegnamentoListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    Insegnamenti?: InsegnamentoOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    Email?: string
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    Nome?: StringFilter<"Docente"> | string
    Cognome?: StringFilter<"Docente"> | string
    Insegnamenti?: InsegnamentoListRelationFilter
  }, "Email">

  export type DocenteOrderByWithAggregationInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    Email?: StringWithAggregatesFilter<"Docente"> | string
    Nome?: StringWithAggregatesFilter<"Docente"> | string
    Cognome?: StringWithAggregatesFilter<"Docente"> | string
  }

  export type ClasseWhereInput = {
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    Id?: IntFilter<"Classe"> | number
    Classe?: IntFilter<"Classe"> | number
    Sezione?: StringFilter<"Classe"> | string
    Indirizzo?: StringFilter<"Classe"> | string
    Anno_Scolastico?: DateTimeFilter<"Classe"> | Date | string
    Insegnamenti?: InsegnamentoListRelationFilter
    Classi_Studente?: Classe_StudenteListRelationFilter
  }

  export type ClasseOrderByWithRelationInput = {
    Id?: SortOrder
    Classe?: SortOrder
    Sezione?: SortOrder
    Indirizzo?: SortOrder
    Anno_Scolastico?: SortOrder
    Insegnamenti?: InsegnamentoOrderByRelationAggregateInput
    Classi_Studente?: Classe_StudenteOrderByRelationAggregateInput
  }

  export type ClasseWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ClasseWhereInput | ClasseWhereInput[]
    OR?: ClasseWhereInput[]
    NOT?: ClasseWhereInput | ClasseWhereInput[]
    Classe?: IntFilter<"Classe"> | number
    Sezione?: StringFilter<"Classe"> | string
    Indirizzo?: StringFilter<"Classe"> | string
    Anno_Scolastico?: DateTimeFilter<"Classe"> | Date | string
    Insegnamenti?: InsegnamentoListRelationFilter
    Classi_Studente?: Classe_StudenteListRelationFilter
  }, "Id">

  export type ClasseOrderByWithAggregationInput = {
    Id?: SortOrder
    Classe?: SortOrder
    Sezione?: SortOrder
    Indirizzo?: SortOrder
    Anno_Scolastico?: SortOrder
    _count?: ClasseCountOrderByAggregateInput
    _avg?: ClasseAvgOrderByAggregateInput
    _max?: ClasseMaxOrderByAggregateInput
    _min?: ClasseMinOrderByAggregateInput
    _sum?: ClasseSumOrderByAggregateInput
  }

  export type ClasseScalarWhereWithAggregatesInput = {
    AND?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    OR?: ClasseScalarWhereWithAggregatesInput[]
    NOT?: ClasseScalarWhereWithAggregatesInput | ClasseScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Classe"> | number
    Classe?: IntWithAggregatesFilter<"Classe"> | number
    Sezione?: StringWithAggregatesFilter<"Classe"> | string
    Indirizzo?: StringWithAggregatesFilter<"Classe"> | string
    Anno_Scolastico?: DateTimeWithAggregatesFilter<"Classe"> | Date | string
  }

  export type StudenteWhereInput = {
    AND?: StudenteWhereInput | StudenteWhereInput[]
    OR?: StudenteWhereInput[]
    NOT?: StudenteWhereInput | StudenteWhereInput[]
    Email?: StringFilter<"Studente"> | string
    Nome?: StringFilter<"Studente"> | string
    Cognome?: StringFilter<"Studente"> | string
    DSA_BES?: BoolFilter<"Studente"> | boolean
    Documento?: DocumentoListRelationFilter
    Classi_Studente?: Classe_StudenteListRelationFilter
  }

  export type StudenteOrderByWithRelationInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    DSA_BES?: SortOrder
    Documento?: DocumentoOrderByRelationAggregateInput
    Classi_Studente?: Classe_StudenteOrderByRelationAggregateInput
  }

  export type StudenteWhereUniqueInput = Prisma.AtLeast<{
    Email?: string
    AND?: StudenteWhereInput | StudenteWhereInput[]
    OR?: StudenteWhereInput[]
    NOT?: StudenteWhereInput | StudenteWhereInput[]
    Nome?: StringFilter<"Studente"> | string
    Cognome?: StringFilter<"Studente"> | string
    DSA_BES?: BoolFilter<"Studente"> | boolean
    Documento?: DocumentoListRelationFilter
    Classi_Studente?: Classe_StudenteListRelationFilter
  }, "Email">

  export type StudenteOrderByWithAggregationInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    DSA_BES?: SortOrder
    _count?: StudenteCountOrderByAggregateInput
    _max?: StudenteMaxOrderByAggregateInput
    _min?: StudenteMinOrderByAggregateInput
  }

  export type StudenteScalarWhereWithAggregatesInput = {
    AND?: StudenteScalarWhereWithAggregatesInput | StudenteScalarWhereWithAggregatesInput[]
    OR?: StudenteScalarWhereWithAggregatesInput[]
    NOT?: StudenteScalarWhereWithAggregatesInput | StudenteScalarWhereWithAggregatesInput[]
    Email?: StringWithAggregatesFilter<"Studente"> | string
    Nome?: StringWithAggregatesFilter<"Studente"> | string
    Cognome?: StringWithAggregatesFilter<"Studente"> | string
    DSA_BES?: BoolWithAggregatesFilter<"Studente"> | boolean
  }

  export type DocumentoWhereInput = {
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    Studente_Email?: StringFilter<"Documento"> | string
    Anno?: DateTimeFilter<"Documento"> | Date | string
    Stato?: EnumStatoFilter<"Documento"> | $Enums.Stato
    Tipologia?: EnumTipologia_DocFilter<"Documento"> | $Enums.Tipologia_Doc
    Data_Approvazione?: DateTimeNullableFilter<"Documento"> | Date | string | null
    Materie_Documento?: Materia_DocumentoListRelationFilter
    Documento_ICFs?: Documento_ICFListRelationFilter
    Studente?: XOR<StudenteScalarRelationFilter, StudenteWhereInput>
    Allegati?: AllegatoListRelationFilter
  }

  export type DocumentoOrderByWithRelationInput = {
    Studente_Email?: SortOrder
    Anno?: SortOrder
    Stato?: SortOrder
    Tipologia?: SortOrder
    Data_Approvazione?: SortOrderInput | SortOrder
    Materie_Documento?: Materia_DocumentoOrderByRelationAggregateInput
    Documento_ICFs?: Documento_ICFOrderByRelationAggregateInput
    Studente?: StudenteOrderByWithRelationInput
    Allegati?: AllegatoOrderByRelationAggregateInput
  }

  export type DocumentoWhereUniqueInput = Prisma.AtLeast<{
    Id?: DocumentoIdCompoundUniqueInput
    AND?: DocumentoWhereInput | DocumentoWhereInput[]
    OR?: DocumentoWhereInput[]
    NOT?: DocumentoWhereInput | DocumentoWhereInput[]
    Studente_Email?: StringFilter<"Documento"> | string
    Anno?: DateTimeFilter<"Documento"> | Date | string
    Stato?: EnumStatoFilter<"Documento"> | $Enums.Stato
    Tipologia?: EnumTipologia_DocFilter<"Documento"> | $Enums.Tipologia_Doc
    Data_Approvazione?: DateTimeNullableFilter<"Documento"> | Date | string | null
    Materie_Documento?: Materia_DocumentoListRelationFilter
    Documento_ICFs?: Documento_ICFListRelationFilter
    Studente?: XOR<StudenteScalarRelationFilter, StudenteWhereInput>
    Allegati?: AllegatoListRelationFilter
  }, "Id">

  export type DocumentoOrderByWithAggregationInput = {
    Studente_Email?: SortOrder
    Anno?: SortOrder
    Stato?: SortOrder
    Tipologia?: SortOrder
    Data_Approvazione?: SortOrderInput | SortOrder
    _count?: DocumentoCountOrderByAggregateInput
    _max?: DocumentoMaxOrderByAggregateInput
    _min?: DocumentoMinOrderByAggregateInput
  }

  export type DocumentoScalarWhereWithAggregatesInput = {
    AND?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    OR?: DocumentoScalarWhereWithAggregatesInput[]
    NOT?: DocumentoScalarWhereWithAggregatesInput | DocumentoScalarWhereWithAggregatesInput[]
    Studente_Email?: StringWithAggregatesFilter<"Documento"> | string
    Anno?: DateTimeWithAggregatesFilter<"Documento"> | Date | string
    Stato?: EnumStatoWithAggregatesFilter<"Documento"> | $Enums.Stato
    Tipologia?: EnumTipologia_DocWithAggregatesFilter<"Documento"> | $Enums.Tipologia_Doc
    Data_Approvazione?: DateTimeNullableWithAggregatesFilter<"Documento"> | Date | string | null
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    Nome?: StringFilter<"Materia"> | string
    Insegnamenti?: InsegnamentoListRelationFilter
    Materie_Indicatore?: Materia_IndicatoreListRelationFilter
    Materie_Documento?: Materia_DocumentoListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    Nome?: SortOrder
    Insegnamenti?: InsegnamentoOrderByRelationAggregateInput
    Materie_Indicatore?: Materia_IndicatoreOrderByRelationAggregateInput
    Materie_Documento?: Materia_DocumentoOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    Nome?: string
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    Insegnamenti?: InsegnamentoListRelationFilter
    Materie_Indicatore?: Materia_IndicatoreListRelationFilter
    Materie_Documento?: Materia_DocumentoListRelationFilter
  }, "Nome">

  export type MateriaOrderByWithAggregationInput = {
    Nome?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    Nome?: StringWithAggregatesFilter<"Materia"> | string
  }

  export type IndicatoreWhereInput = {
    AND?: IndicatoreWhereInput | IndicatoreWhereInput[]
    OR?: IndicatoreWhereInput[]
    NOT?: IndicatoreWhereInput | IndicatoreWhereInput[]
    Id?: IntFilter<"Indicatore"> | number
    Tipologia?: EnumTipologia_IndFilter<"Indicatore"> | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFilter<"Indicatore"> | $Enums.Categoria
    Descrizione?: StringFilter<"Indicatore"> | string
    Materia_Indicatori?: Materia_IndicatoreListRelationFilter
  }

  export type IndicatoreOrderByWithRelationInput = {
    Id?: SortOrder
    Tipologia?: SortOrder
    Categoria?: SortOrder
    Descrizione?: SortOrder
    Materia_Indicatori?: Materia_IndicatoreOrderByRelationAggregateInput
  }

  export type IndicatoreWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: IndicatoreWhereInput | IndicatoreWhereInput[]
    OR?: IndicatoreWhereInput[]
    NOT?: IndicatoreWhereInput | IndicatoreWhereInput[]
    Tipologia?: EnumTipologia_IndFilter<"Indicatore"> | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFilter<"Indicatore"> | $Enums.Categoria
    Descrizione?: StringFilter<"Indicatore"> | string
    Materia_Indicatori?: Materia_IndicatoreListRelationFilter
  }, "Id">

  export type IndicatoreOrderByWithAggregationInput = {
    Id?: SortOrder
    Tipologia?: SortOrder
    Categoria?: SortOrder
    Descrizione?: SortOrder
    _count?: IndicatoreCountOrderByAggregateInput
    _avg?: IndicatoreAvgOrderByAggregateInput
    _max?: IndicatoreMaxOrderByAggregateInput
    _min?: IndicatoreMinOrderByAggregateInput
    _sum?: IndicatoreSumOrderByAggregateInput
  }

  export type IndicatoreScalarWhereWithAggregatesInput = {
    AND?: IndicatoreScalarWhereWithAggregatesInput | IndicatoreScalarWhereWithAggregatesInput[]
    OR?: IndicatoreScalarWhereWithAggregatesInput[]
    NOT?: IndicatoreScalarWhereWithAggregatesInput | IndicatoreScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Indicatore"> | number
    Tipologia?: EnumTipologia_IndWithAggregatesFilter<"Indicatore"> | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaWithAggregatesFilter<"Indicatore"> | $Enums.Categoria
    Descrizione?: StringWithAggregatesFilter<"Indicatore"> | string
  }

  export type AllegatoWhereInput = {
    AND?: AllegatoWhereInput | AllegatoWhereInput[]
    OR?: AllegatoWhereInput[]
    NOT?: AllegatoWhereInput | AllegatoWhereInput[]
    Id?: IntFilter<"Allegato"> | number
    Nome?: StringFilter<"Allegato"> | string
    Percorso?: StringFilter<"Allegato"> | string
    Documento_Studente_Email?: StringFilter<"Allegato"> | string
    Documento_Anno?: DateTimeFilter<"Allegato"> | Date | string
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }

  export type AllegatoOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Percorso?: SortOrder
    Documento_Studente_Email?: SortOrder
    Documento_Anno?: SortOrder
    Documento?: DocumentoOrderByWithRelationInput
  }

  export type AllegatoWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: AllegatoWhereInput | AllegatoWhereInput[]
    OR?: AllegatoWhereInput[]
    NOT?: AllegatoWhereInput | AllegatoWhereInput[]
    Nome?: StringFilter<"Allegato"> | string
    Percorso?: StringFilter<"Allegato"> | string
    Documento_Studente_Email?: StringFilter<"Allegato"> | string
    Documento_Anno?: DateTimeFilter<"Allegato"> | Date | string
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }, "Id">

  export type AllegatoOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Percorso?: SortOrder
    Documento_Studente_Email?: SortOrder
    Documento_Anno?: SortOrder
    _count?: AllegatoCountOrderByAggregateInput
    _avg?: AllegatoAvgOrderByAggregateInput
    _max?: AllegatoMaxOrderByAggregateInput
    _min?: AllegatoMinOrderByAggregateInput
    _sum?: AllegatoSumOrderByAggregateInput
  }

  export type AllegatoScalarWhereWithAggregatesInput = {
    AND?: AllegatoScalarWhereWithAggregatesInput | AllegatoScalarWhereWithAggregatesInput[]
    OR?: AllegatoScalarWhereWithAggregatesInput[]
    NOT?: AllegatoScalarWhereWithAggregatesInput | AllegatoScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Allegato"> | number
    Nome?: StringWithAggregatesFilter<"Allegato"> | string
    Percorso?: StringWithAggregatesFilter<"Allegato"> | string
    Documento_Studente_Email?: StringWithAggregatesFilter<"Allegato"> | string
    Documento_Anno?: DateTimeWithAggregatesFilter<"Allegato"> | Date | string
  }

  export type ICFWhereInput = {
    AND?: ICFWhereInput | ICFWhereInput[]
    OR?: ICFWhereInput[]
    NOT?: ICFWhereInput | ICFWhereInput[]
    Codice?: StringFilter<"ICF"> | string
    Descrizione?: StringNullableFilter<"ICF"> | string | null
    Documenti_ICF?: Documento_ICFListRelationFilter
  }

  export type ICFOrderByWithRelationInput = {
    Codice?: SortOrder
    Descrizione?: SortOrderInput | SortOrder
    Documenti_ICF?: Documento_ICFOrderByRelationAggregateInput
  }

  export type ICFWhereUniqueInput = Prisma.AtLeast<{
    Codice?: string
    AND?: ICFWhereInput | ICFWhereInput[]
    OR?: ICFWhereInput[]
    NOT?: ICFWhereInput | ICFWhereInput[]
    Descrizione?: StringNullableFilter<"ICF"> | string | null
    Documenti_ICF?: Documento_ICFListRelationFilter
  }, "Codice">

  export type ICFOrderByWithAggregationInput = {
    Codice?: SortOrder
    Descrizione?: SortOrderInput | SortOrder
    _count?: ICFCountOrderByAggregateInput
    _max?: ICFMaxOrderByAggregateInput
    _min?: ICFMinOrderByAggregateInput
  }

  export type ICFScalarWhereWithAggregatesInput = {
    AND?: ICFScalarWhereWithAggregatesInput | ICFScalarWhereWithAggregatesInput[]
    OR?: ICFScalarWhereWithAggregatesInput[]
    NOT?: ICFScalarWhereWithAggregatesInput | ICFScalarWhereWithAggregatesInput[]
    Codice?: StringWithAggregatesFilter<"ICF"> | string
    Descrizione?: StringNullableWithAggregatesFilter<"ICF"> | string | null
  }

  export type InsegnamentoWhereInput = {
    AND?: InsegnamentoWhereInput | InsegnamentoWhereInput[]
    OR?: InsegnamentoWhereInput[]
    NOT?: InsegnamentoWhereInput | InsegnamentoWhereInput[]
    Docente_Email?: StringFilter<"Insegnamento"> | string
    Classe_Id?: IntFilter<"Insegnamento"> | number
    Materia_Nome?: StringFilter<"Insegnamento"> | string
    Docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type InsegnamentoOrderByWithRelationInput = {
    Docente_Email?: SortOrder
    Classe_Id?: SortOrder
    Materia_Nome?: SortOrder
    Docente?: DocenteOrderByWithRelationInput
    Classe?: ClasseOrderByWithRelationInput
    Materia?: MateriaOrderByWithRelationInput
  }

  export type InsegnamentoWhereUniqueInput = Prisma.AtLeast<{
    Id?: InsegnamentoIdCompoundUniqueInput
    AND?: InsegnamentoWhereInput | InsegnamentoWhereInput[]
    OR?: InsegnamentoWhereInput[]
    NOT?: InsegnamentoWhereInput | InsegnamentoWhereInput[]
    Docente_Email?: StringFilter<"Insegnamento"> | string
    Classe_Id?: IntFilter<"Insegnamento"> | number
    Materia_Nome?: StringFilter<"Insegnamento"> | string
    Docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "Id">

  export type InsegnamentoOrderByWithAggregationInput = {
    Docente_Email?: SortOrder
    Classe_Id?: SortOrder
    Materia_Nome?: SortOrder
    _count?: InsegnamentoCountOrderByAggregateInput
    _avg?: InsegnamentoAvgOrderByAggregateInput
    _max?: InsegnamentoMaxOrderByAggregateInput
    _min?: InsegnamentoMinOrderByAggregateInput
    _sum?: InsegnamentoSumOrderByAggregateInput
  }

  export type InsegnamentoScalarWhereWithAggregatesInput = {
    AND?: InsegnamentoScalarWhereWithAggregatesInput | InsegnamentoScalarWhereWithAggregatesInput[]
    OR?: InsegnamentoScalarWhereWithAggregatesInput[]
    NOT?: InsegnamentoScalarWhereWithAggregatesInput | InsegnamentoScalarWhereWithAggregatesInput[]
    Docente_Email?: StringWithAggregatesFilter<"Insegnamento"> | string
    Classe_Id?: IntWithAggregatesFilter<"Insegnamento"> | number
    Materia_Nome?: StringWithAggregatesFilter<"Insegnamento"> | string
  }

  export type Classe_StudenteWhereInput = {
    AND?: Classe_StudenteWhereInput | Classe_StudenteWhereInput[]
    OR?: Classe_StudenteWhereInput[]
    NOT?: Classe_StudenteWhereInput | Classe_StudenteWhereInput[]
    Classe_Id?: IntFilter<"Classe_Studente"> | number
    Studente_Email?: StringFilter<"Classe_Studente"> | string
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Studente?: XOR<StudenteScalarRelationFilter, StudenteWhereInput>
  }

  export type Classe_StudenteOrderByWithRelationInput = {
    Classe_Id?: SortOrder
    Studente_Email?: SortOrder
    Classe?: ClasseOrderByWithRelationInput
    Studente?: StudenteOrderByWithRelationInput
  }

  export type Classe_StudenteWhereUniqueInput = Prisma.AtLeast<{
    Id?: Classe_StudenteIdCompoundUniqueInput
    AND?: Classe_StudenteWhereInput | Classe_StudenteWhereInput[]
    OR?: Classe_StudenteWhereInput[]
    NOT?: Classe_StudenteWhereInput | Classe_StudenteWhereInput[]
    Classe_Id?: IntFilter<"Classe_Studente"> | number
    Studente_Email?: StringFilter<"Classe_Studente"> | string
    Classe?: XOR<ClasseScalarRelationFilter, ClasseWhereInput>
    Studente?: XOR<StudenteScalarRelationFilter, StudenteWhereInput>
  }, "Id">

  export type Classe_StudenteOrderByWithAggregationInput = {
    Classe_Id?: SortOrder
    Studente_Email?: SortOrder
    _count?: Classe_StudenteCountOrderByAggregateInput
    _avg?: Classe_StudenteAvgOrderByAggregateInput
    _max?: Classe_StudenteMaxOrderByAggregateInput
    _min?: Classe_StudenteMinOrderByAggregateInput
    _sum?: Classe_StudenteSumOrderByAggregateInput
  }

  export type Classe_StudenteScalarWhereWithAggregatesInput = {
    AND?: Classe_StudenteScalarWhereWithAggregatesInput | Classe_StudenteScalarWhereWithAggregatesInput[]
    OR?: Classe_StudenteScalarWhereWithAggregatesInput[]
    NOT?: Classe_StudenteScalarWhereWithAggregatesInput | Classe_StudenteScalarWhereWithAggregatesInput[]
    Classe_Id?: IntWithAggregatesFilter<"Classe_Studente"> | number
    Studente_Email?: StringWithAggregatesFilter<"Classe_Studente"> | string
  }

  export type Materia_IndicatoreWhereInput = {
    AND?: Materia_IndicatoreWhereInput | Materia_IndicatoreWhereInput[]
    OR?: Materia_IndicatoreWhereInput[]
    NOT?: Materia_IndicatoreWhereInput | Materia_IndicatoreWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Indicatore"> | string
    Indicatore_Id?: IntFilter<"Materia_Indicatore"> | number
    Valore?: BoolFilter<"Materia_Indicatore"> | boolean
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    Indicatore?: XOR<IndicatoreScalarRelationFilter, IndicatoreWhereInput>
  }

  export type Materia_IndicatoreOrderByWithRelationInput = {
    Materia_Nome?: SortOrder
    Indicatore_Id?: SortOrder
    Valore?: SortOrder
    Materia?: MateriaOrderByWithRelationInput
    Indicatore?: IndicatoreOrderByWithRelationInput
  }

  export type Materia_IndicatoreWhereUniqueInput = Prisma.AtLeast<{
    Id?: Materia_IndicatoreIdCompoundUniqueInput
    AND?: Materia_IndicatoreWhereInput | Materia_IndicatoreWhereInput[]
    OR?: Materia_IndicatoreWhereInput[]
    NOT?: Materia_IndicatoreWhereInput | Materia_IndicatoreWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Indicatore"> | string
    Indicatore_Id?: IntFilter<"Materia_Indicatore"> | number
    Valore?: BoolFilter<"Materia_Indicatore"> | boolean
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    Indicatore?: XOR<IndicatoreScalarRelationFilter, IndicatoreWhereInput>
  }, "Id">

  export type Materia_IndicatoreOrderByWithAggregationInput = {
    Materia_Nome?: SortOrder
    Indicatore_Id?: SortOrder
    Valore?: SortOrder
    _count?: Materia_IndicatoreCountOrderByAggregateInput
    _avg?: Materia_IndicatoreAvgOrderByAggregateInput
    _max?: Materia_IndicatoreMaxOrderByAggregateInput
    _min?: Materia_IndicatoreMinOrderByAggregateInput
    _sum?: Materia_IndicatoreSumOrderByAggregateInput
  }

  export type Materia_IndicatoreScalarWhereWithAggregatesInput = {
    AND?: Materia_IndicatoreScalarWhereWithAggregatesInput | Materia_IndicatoreScalarWhereWithAggregatesInput[]
    OR?: Materia_IndicatoreScalarWhereWithAggregatesInput[]
    NOT?: Materia_IndicatoreScalarWhereWithAggregatesInput | Materia_IndicatoreScalarWhereWithAggregatesInput[]
    Materia_Nome?: StringWithAggregatesFilter<"Materia_Indicatore"> | string
    Indicatore_Id?: IntWithAggregatesFilter<"Materia_Indicatore"> | number
    Valore?: BoolWithAggregatesFilter<"Materia_Indicatore"> | boolean
  }

  export type Materia_DocumentoWhereInput = {
    AND?: Materia_DocumentoWhereInput | Materia_DocumentoWhereInput[]
    OR?: Materia_DocumentoWhereInput[]
    NOT?: Materia_DocumentoWhereInput | Materia_DocumentoWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Documento"> | string
    Documento_Anno?: DateTimeFilter<"Materia_Documento"> | Date | string
    Documento_Studente_Email?: StringFilter<"Materia_Documento"> | string
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }

  export type Materia_DocumentoOrderByWithRelationInput = {
    Materia_Nome?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
    Materia?: MateriaOrderByWithRelationInput
    Documento?: DocumentoOrderByWithRelationInput
  }

  export type Materia_DocumentoWhereUniqueInput = Prisma.AtLeast<{
    Id?: Materia_DocumentoIdCompoundUniqueInput
    AND?: Materia_DocumentoWhereInput | Materia_DocumentoWhereInput[]
    OR?: Materia_DocumentoWhereInput[]
    NOT?: Materia_DocumentoWhereInput | Materia_DocumentoWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Documento"> | string
    Documento_Anno?: DateTimeFilter<"Materia_Documento"> | Date | string
    Documento_Studente_Email?: StringFilter<"Materia_Documento"> | string
    Materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }, "Id">

  export type Materia_DocumentoOrderByWithAggregationInput = {
    Materia_Nome?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
    _count?: Materia_DocumentoCountOrderByAggregateInput
    _max?: Materia_DocumentoMaxOrderByAggregateInput
    _min?: Materia_DocumentoMinOrderByAggregateInput
  }

  export type Materia_DocumentoScalarWhereWithAggregatesInput = {
    AND?: Materia_DocumentoScalarWhereWithAggregatesInput | Materia_DocumentoScalarWhereWithAggregatesInput[]
    OR?: Materia_DocumentoScalarWhereWithAggregatesInput[]
    NOT?: Materia_DocumentoScalarWhereWithAggregatesInput | Materia_DocumentoScalarWhereWithAggregatesInput[]
    Materia_Nome?: StringWithAggregatesFilter<"Materia_Documento"> | string
    Documento_Anno?: DateTimeWithAggregatesFilter<"Materia_Documento"> | Date | string
    Documento_Studente_Email?: StringWithAggregatesFilter<"Materia_Documento"> | string
  }

  export type Documento_ICFWhereInput = {
    AND?: Documento_ICFWhereInput | Documento_ICFWhereInput[]
    OR?: Documento_ICFWhereInput[]
    NOT?: Documento_ICFWhereInput | Documento_ICFWhereInput[]
    ICF_Codice?: StringFilter<"Documento_ICF"> | string
    Documento_Anno?: DateTimeFilter<"Documento_ICF"> | Date | string
    Documento_Studente_Email?: StringFilter<"Documento_ICF"> | string
    ICF?: XOR<ICFScalarRelationFilter, ICFWhereInput>
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }

  export type Documento_ICFOrderByWithRelationInput = {
    ICF_Codice?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
    ICF?: ICFOrderByWithRelationInput
    Documento?: DocumentoOrderByWithRelationInput
  }

  export type Documento_ICFWhereUniqueInput = Prisma.AtLeast<{
    Id?: Documento_ICFIdCompoundUniqueInput
    AND?: Documento_ICFWhereInput | Documento_ICFWhereInput[]
    OR?: Documento_ICFWhereInput[]
    NOT?: Documento_ICFWhereInput | Documento_ICFWhereInput[]
    ICF_Codice?: StringFilter<"Documento_ICF"> | string
    Documento_Anno?: DateTimeFilter<"Documento_ICF"> | Date | string
    Documento_Studente_Email?: StringFilter<"Documento_ICF"> | string
    ICF?: XOR<ICFScalarRelationFilter, ICFWhereInput>
    Documento?: XOR<DocumentoScalarRelationFilter, DocumentoWhereInput>
  }, "Id">

  export type Documento_ICFOrderByWithAggregationInput = {
    ICF_Codice?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
    _count?: Documento_ICFCountOrderByAggregateInput
    _max?: Documento_ICFMaxOrderByAggregateInput
    _min?: Documento_ICFMinOrderByAggregateInput
  }

  export type Documento_ICFScalarWhereWithAggregatesInput = {
    AND?: Documento_ICFScalarWhereWithAggregatesInput | Documento_ICFScalarWhereWithAggregatesInput[]
    OR?: Documento_ICFScalarWhereWithAggregatesInput[]
    NOT?: Documento_ICFScalarWhereWithAggregatesInput | Documento_ICFScalarWhereWithAggregatesInput[]
    ICF_Codice?: StringWithAggregatesFilter<"Documento_ICF"> | string
    Documento_Anno?: DateTimeWithAggregatesFilter<"Documento_ICF"> | Date | string
    Documento_Studente_Email?: StringWithAggregatesFilter<"Documento_ICF"> | string
  }

  export type DocenteCreateInput = {
    Email: string
    Nome: string
    Cognome: string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    Email: string
    Nome: string
    Cognome: string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteCreateManyInput = {
    Email: string
    Nome: string
    Cognome: string
  }

  export type DocenteUpdateManyMutationInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseCreateInput = {
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutClasseInput
    Classi_Studente?: Classe_StudenteCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateInput = {
    Id?: number
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutClasseInput
    Classi_Studente?: Classe_StudenteUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseUpdateInput = {
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutClasseNestedInput
    Classi_Studente?: Classe_StudenteUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutClasseNestedInput
    Classi_Studente?: Classe_StudenteUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type ClasseCreateManyInput = {
    Id?: number
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
  }

  export type ClasseUpdateManyMutationInput = {
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClasseUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudenteCreateInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Documento?: DocumentoCreateNestedManyWithoutStudenteInput
    Classi_Studente?: Classe_StudenteCreateNestedManyWithoutStudenteInput
  }

  export type StudenteUncheckedCreateInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Documento?: DocumentoUncheckedCreateNestedManyWithoutStudenteInput
    Classi_Studente?: Classe_StudenteUncheckedCreateNestedManyWithoutStudenteInput
  }

  export type StudenteUpdateInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Documento?: DocumentoUpdateManyWithoutStudenteNestedInput
    Classi_Studente?: Classe_StudenteUpdateManyWithoutStudenteNestedInput
  }

  export type StudenteUncheckedUpdateInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Documento?: DocumentoUncheckedUpdateManyWithoutStudenteNestedInput
    Classi_Studente?: Classe_StudenteUncheckedUpdateManyWithoutStudenteNestedInput
  }

  export type StudenteCreateManyInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
  }

  export type StudenteUpdateManyMutationInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudenteUncheckedUpdateManyInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DocumentoCreateInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFCreateNestedManyWithoutDocumentoInput
    Studente: StudenteCreateNestedOneWithoutDocumentoInput
    Allegati?: AllegatoCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateInput = {
    Studente_Email: string
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFUncheckedCreateNestedManyWithoutDocumentoInput
    Allegati?: AllegatoUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUpdateInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUpdateManyWithoutDocumentoNestedInput
    Studente?: StudenteUpdateOneRequiredWithoutDocumentoNestedInput
    Allegati?: AllegatoUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUncheckedUpdateManyWithoutDocumentoNestedInput
    Allegati?: AllegatoUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoCreateManyInput = {
    Studente_Email: string
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
  }

  export type DocumentoUpdateManyMutationInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentoUncheckedUpdateManyInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MateriaCreateInput = {
    Nome: string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutMateriaInput
    Materie_Indicatore?: Materia_IndicatoreCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    Nome: string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutMateriaInput
    Materie_Indicatore?: Materia_IndicatoreUncheckedCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutMateriaNestedInput
    Materie_Indicatore?: Materia_IndicatoreUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutMateriaNestedInput
    Materie_Indicatore?: Materia_IndicatoreUncheckedUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    Nome: string
  }

  export type MateriaUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatoreCreateInput = {
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
    Materia_Indicatori?: Materia_IndicatoreCreateNestedManyWithoutIndicatoreInput
  }

  export type IndicatoreUncheckedCreateInput = {
    Id?: number
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
    Materia_Indicatori?: Materia_IndicatoreUncheckedCreateNestedManyWithoutIndicatoreInput
  }

  export type IndicatoreUpdateInput = {
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
    Materia_Indicatori?: Materia_IndicatoreUpdateManyWithoutIndicatoreNestedInput
  }

  export type IndicatoreUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
    Materia_Indicatori?: Materia_IndicatoreUncheckedUpdateManyWithoutIndicatoreNestedInput
  }

  export type IndicatoreCreateManyInput = {
    Id?: number
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
  }

  export type IndicatoreUpdateManyMutationInput = {
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatoreUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
  }

  export type AllegatoCreateInput = {
    Nome: string
    Percorso: string
    Documento: DocumentoCreateNestedOneWithoutAllegatiInput
  }

  export type AllegatoUncheckedCreateInput = {
    Id?: number
    Nome: string
    Percorso: string
    Documento_Studente_Email: string
    Documento_Anno: Date | string
  }

  export type AllegatoUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
    Documento?: DocumentoUpdateOneRequiredWithoutAllegatiNestedInput
  }

  export type AllegatoUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllegatoCreateManyInput = {
    Id?: number
    Nome: string
    Percorso: string
    Documento_Studente_Email: string
    Documento_Anno: Date | string
  }

  export type AllegatoUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
  }

  export type AllegatoUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ICFCreateInput = {
    Codice: string
    Descrizione?: string | null
    Documenti_ICF?: Documento_ICFCreateNestedManyWithoutICFInput
  }

  export type ICFUncheckedCreateInput = {
    Codice: string
    Descrizione?: string | null
    Documenti_ICF?: Documento_ICFUncheckedCreateNestedManyWithoutICFInput
  }

  export type ICFUpdateInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
    Documenti_ICF?: Documento_ICFUpdateManyWithoutICFNestedInput
  }

  export type ICFUncheckedUpdateInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
    Documenti_ICF?: Documento_ICFUncheckedUpdateManyWithoutICFNestedInput
  }

  export type ICFCreateManyInput = {
    Codice: string
    Descrizione?: string | null
  }

  export type ICFUpdateManyMutationInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ICFUncheckedUpdateManyInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InsegnamentoCreateInput = {
    Docente: DocenteCreateNestedOneWithoutInsegnamentiInput
    Classe: ClasseCreateNestedOneWithoutInsegnamentiInput
    Materia: MateriaCreateNestedOneWithoutInsegnamentiInput
  }

  export type InsegnamentoUncheckedCreateInput = {
    Docente_Email: string
    Classe_Id: number
    Materia_Nome: string
  }

  export type InsegnamentoUpdateInput = {
    Docente?: DocenteUpdateOneRequiredWithoutInsegnamentiNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutInsegnamentiNestedInput
    Materia?: MateriaUpdateOneRequiredWithoutInsegnamentiNestedInput
  }

  export type InsegnamentoUncheckedUpdateInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type InsegnamentoCreateManyInput = {
    Docente_Email: string
    Classe_Id: number
    Materia_Nome: string
  }

  export type InsegnamentoUpdateManyMutationInput = {

  }

  export type InsegnamentoUncheckedUpdateManyInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type Classe_StudenteCreateInput = {
    Classe: ClasseCreateNestedOneWithoutClassi_StudenteInput
    Studente: StudenteCreateNestedOneWithoutClassi_StudenteInput
  }

  export type Classe_StudenteUncheckedCreateInput = {
    Classe_Id: number
    Studente_Email: string
  }

  export type Classe_StudenteUpdateInput = {
    Classe?: ClasseUpdateOneRequiredWithoutClassi_StudenteNestedInput
    Studente?: StudenteUpdateOneRequiredWithoutClassi_StudenteNestedInput
  }

  export type Classe_StudenteUncheckedUpdateInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Classe_StudenteCreateManyInput = {
    Classe_Id: number
    Studente_Email: string
  }

  export type Classe_StudenteUpdateManyMutationInput = {

  }

  export type Classe_StudenteUncheckedUpdateManyInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Materia_IndicatoreCreateInput = {
    Valore: boolean
    Materia: MateriaCreateNestedOneWithoutMaterie_IndicatoreInput
    Indicatore: IndicatoreCreateNestedOneWithoutMateria_IndicatoriInput
  }

  export type Materia_IndicatoreUncheckedCreateInput = {
    Materia_Nome: string
    Indicatore_Id: number
    Valore: boolean
  }

  export type Materia_IndicatoreUpdateInput = {
    Valore?: BoolFieldUpdateOperationsInput | boolean
    Materia?: MateriaUpdateOneRequiredWithoutMaterie_IndicatoreNestedInput
    Indicatore?: IndicatoreUpdateOneRequiredWithoutMateria_IndicatoriNestedInput
  }

  export type Materia_IndicatoreUncheckedUpdateInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Indicatore_Id?: IntFieldUpdateOperationsInput | number
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_IndicatoreCreateManyInput = {
    Materia_Nome: string
    Indicatore_Id: number
    Valore: boolean
  }

  export type Materia_IndicatoreUpdateManyMutationInput = {
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_IndicatoreUncheckedUpdateManyInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Indicatore_Id?: IntFieldUpdateOperationsInput | number
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_DocumentoCreateInput = {
    Materia: MateriaCreateNestedOneWithoutMaterie_DocumentoInput
    Documento: DocumentoCreateNestedOneWithoutMaterie_DocumentoInput
  }

  export type Materia_DocumentoUncheckedCreateInput = {
    Materia_Nome: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Materia_DocumentoUpdateInput = {
    Materia?: MateriaUpdateOneRequiredWithoutMaterie_DocumentoNestedInput
    Documento?: DocumentoUpdateOneRequiredWithoutMaterie_DocumentoNestedInput
  }

  export type Materia_DocumentoUncheckedUpdateInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Materia_DocumentoCreateManyInput = {
    Materia_Nome: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Materia_DocumentoUpdateManyMutationInput = {

  }

  export type Materia_DocumentoUncheckedUpdateManyInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Documento_ICFCreateInput = {
    ICF: ICFCreateNestedOneWithoutDocumenti_ICFInput
    Documento: DocumentoCreateNestedOneWithoutDocumento_ICFsInput
  }

  export type Documento_ICFUncheckedCreateInput = {
    ICF_Codice: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Documento_ICFUpdateInput = {
    ICF?: ICFUpdateOneRequiredWithoutDocumenti_ICFNestedInput
    Documento?: DocumentoUpdateOneRequiredWithoutDocumento_ICFsNestedInput
  }

  export type Documento_ICFUncheckedUpdateInput = {
    ICF_Codice?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Documento_ICFCreateManyInput = {
    ICF_Codice: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Documento_ICFUpdateManyMutationInput = {

  }

  export type Documento_ICFUncheckedUpdateManyInput = {
    ICF_Codice?: StringFieldUpdateOperationsInput | string
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type InsegnamentoListRelationFilter = {
    every?: InsegnamentoWhereInput
    some?: InsegnamentoWhereInput
    none?: InsegnamentoWhereInput
  }

  export type InsegnamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Classe_StudenteListRelationFilter = {
    every?: Classe_StudenteWhereInput
    some?: Classe_StudenteWhereInput
    none?: Classe_StudenteWhereInput
  }

  export type Classe_StudenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClasseCountOrderByAggregateInput = {
    Id?: SortOrder
    Classe?: SortOrder
    Sezione?: SortOrder
    Indirizzo?: SortOrder
    Anno_Scolastico?: SortOrder
  }

  export type ClasseAvgOrderByAggregateInput = {
    Id?: SortOrder
    Classe?: SortOrder
  }

  export type ClasseMaxOrderByAggregateInput = {
    Id?: SortOrder
    Classe?: SortOrder
    Sezione?: SortOrder
    Indirizzo?: SortOrder
    Anno_Scolastico?: SortOrder
  }

  export type ClasseMinOrderByAggregateInput = {
    Id?: SortOrder
    Classe?: SortOrder
    Sezione?: SortOrder
    Indirizzo?: SortOrder
    Anno_Scolastico?: SortOrder
  }

  export type ClasseSumOrderByAggregateInput = {
    Id?: SortOrder
    Classe?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DocumentoListRelationFilter = {
    every?: DocumentoWhereInput
    some?: DocumentoWhereInput
    none?: DocumentoWhereInput
  }

  export type DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudenteCountOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    DSA_BES?: SortOrder
  }

  export type StudenteMaxOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    DSA_BES?: SortOrder
  }

  export type StudenteMinOrderByAggregateInput = {
    Email?: SortOrder
    Nome?: SortOrder
    Cognome?: SortOrder
    DSA_BES?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatoFilter<$PrismaModel = never> = {
    equals?: $Enums.Stato | EnumStatoFieldRefInput<$PrismaModel>
    in?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatoFilter<$PrismaModel> | $Enums.Stato
  }

  export type EnumTipologia_DocFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Doc | EnumTipologia_DocFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_DocFilter<$PrismaModel> | $Enums.Tipologia_Doc
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Materia_DocumentoListRelationFilter = {
    every?: Materia_DocumentoWhereInput
    some?: Materia_DocumentoWhereInput
    none?: Materia_DocumentoWhereInput
  }

  export type Documento_ICFListRelationFilter = {
    every?: Documento_ICFWhereInput
    some?: Documento_ICFWhereInput
    none?: Documento_ICFWhereInput
  }

  export type StudenteScalarRelationFilter = {
    is?: StudenteWhereInput
    isNot?: StudenteWhereInput
  }

  export type AllegatoListRelationFilter = {
    every?: AllegatoWhereInput
    some?: AllegatoWhereInput
    none?: AllegatoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Materia_DocumentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Documento_ICFOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AllegatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoIdCompoundUniqueInput = {
    Studente_Email: string
    Anno: Date | string
  }

  export type DocumentoCountOrderByAggregateInput = {
    Studente_Email?: SortOrder
    Anno?: SortOrder
    Stato?: SortOrder
    Tipologia?: SortOrder
    Data_Approvazione?: SortOrder
  }

  export type DocumentoMaxOrderByAggregateInput = {
    Studente_Email?: SortOrder
    Anno?: SortOrder
    Stato?: SortOrder
    Tipologia?: SortOrder
    Data_Approvazione?: SortOrder
  }

  export type DocumentoMinOrderByAggregateInput = {
    Studente_Email?: SortOrder
    Anno?: SortOrder
    Stato?: SortOrder
    Tipologia?: SortOrder
    Data_Approvazione?: SortOrder
  }

  export type EnumStatoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stato | EnumStatoFieldRefInput<$PrismaModel>
    in?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatoWithAggregatesFilter<$PrismaModel> | $Enums.Stato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoFilter<$PrismaModel>
    _max?: NestedEnumStatoFilter<$PrismaModel>
  }

  export type EnumTipologia_DocWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Doc | EnumTipologia_DocFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_DocWithAggregatesFilter<$PrismaModel> | $Enums.Tipologia_Doc
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipologia_DocFilter<$PrismaModel>
    _max?: NestedEnumTipologia_DocFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Materia_IndicatoreListRelationFilter = {
    every?: Materia_IndicatoreWhereInput
    some?: Materia_IndicatoreWhereInput
    none?: Materia_IndicatoreWhereInput
  }

  export type Materia_IndicatoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    Nome?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    Nome?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    Nome?: SortOrder
  }

  export type EnumTipologia_IndFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Ind | EnumTipologia_IndFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_IndFilter<$PrismaModel> | $Enums.Tipologia_Ind
  }

  export type EnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type IndicatoreCountOrderByAggregateInput = {
    Id?: SortOrder
    Tipologia?: SortOrder
    Categoria?: SortOrder
    Descrizione?: SortOrder
  }

  export type IndicatoreAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IndicatoreMaxOrderByAggregateInput = {
    Id?: SortOrder
    Tipologia?: SortOrder
    Categoria?: SortOrder
    Descrizione?: SortOrder
  }

  export type IndicatoreMinOrderByAggregateInput = {
    Id?: SortOrder
    Tipologia?: SortOrder
    Categoria?: SortOrder
    Descrizione?: SortOrder
  }

  export type IndicatoreSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type EnumTipologia_IndWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Ind | EnumTipologia_IndFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_IndWithAggregatesFilter<$PrismaModel> | $Enums.Tipologia_Ind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipologia_IndFilter<$PrismaModel>
    _max?: NestedEnumTipologia_IndFilter<$PrismaModel>
  }

  export type EnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type DocumentoScalarRelationFilter = {
    is?: DocumentoWhereInput
    isNot?: DocumentoWhereInput
  }

  export type AllegatoCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Percorso?: SortOrder
    Documento_Studente_Email?: SortOrder
    Documento_Anno?: SortOrder
  }

  export type AllegatoAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type AllegatoMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Percorso?: SortOrder
    Documento_Studente_Email?: SortOrder
    Documento_Anno?: SortOrder
  }

  export type AllegatoMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Percorso?: SortOrder
    Documento_Studente_Email?: SortOrder
    Documento_Anno?: SortOrder
  }

  export type AllegatoSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ICFCountOrderByAggregateInput = {
    Codice?: SortOrder
    Descrizione?: SortOrder
  }

  export type ICFMaxOrderByAggregateInput = {
    Codice?: SortOrder
    Descrizione?: SortOrder
  }

  export type ICFMinOrderByAggregateInput = {
    Codice?: SortOrder
    Descrizione?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DocenteScalarRelationFilter = {
    is?: DocenteWhereInput
    isNot?: DocenteWhereInput
  }

  export type ClasseScalarRelationFilter = {
    is?: ClasseWhereInput
    isNot?: ClasseWhereInput
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type InsegnamentoIdCompoundUniqueInput = {
    Docente_Email: string
    Classe_Id: number
    Materia_Nome: string
  }

  export type InsegnamentoCountOrderByAggregateInput = {
    Docente_Email?: SortOrder
    Classe_Id?: SortOrder
    Materia_Nome?: SortOrder
  }

  export type InsegnamentoAvgOrderByAggregateInput = {
    Classe_Id?: SortOrder
  }

  export type InsegnamentoMaxOrderByAggregateInput = {
    Docente_Email?: SortOrder
    Classe_Id?: SortOrder
    Materia_Nome?: SortOrder
  }

  export type InsegnamentoMinOrderByAggregateInput = {
    Docente_Email?: SortOrder
    Classe_Id?: SortOrder
    Materia_Nome?: SortOrder
  }

  export type InsegnamentoSumOrderByAggregateInput = {
    Classe_Id?: SortOrder
  }

  export type Classe_StudenteIdCompoundUniqueInput = {
    Studente_Email: string
    Classe_Id: number
  }

  export type Classe_StudenteCountOrderByAggregateInput = {
    Classe_Id?: SortOrder
    Studente_Email?: SortOrder
  }

  export type Classe_StudenteAvgOrderByAggregateInput = {
    Classe_Id?: SortOrder
  }

  export type Classe_StudenteMaxOrderByAggregateInput = {
    Classe_Id?: SortOrder
    Studente_Email?: SortOrder
  }

  export type Classe_StudenteMinOrderByAggregateInput = {
    Classe_Id?: SortOrder
    Studente_Email?: SortOrder
  }

  export type Classe_StudenteSumOrderByAggregateInput = {
    Classe_Id?: SortOrder
  }

  export type IndicatoreScalarRelationFilter = {
    is?: IndicatoreWhereInput
    isNot?: IndicatoreWhereInput
  }

  export type Materia_IndicatoreIdCompoundUniqueInput = {
    Materia_Nome: string
    Indicatore_Id: number
  }

  export type Materia_IndicatoreCountOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Indicatore_Id?: SortOrder
    Valore?: SortOrder
  }

  export type Materia_IndicatoreAvgOrderByAggregateInput = {
    Indicatore_Id?: SortOrder
  }

  export type Materia_IndicatoreMaxOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Indicatore_Id?: SortOrder
    Valore?: SortOrder
  }

  export type Materia_IndicatoreMinOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Indicatore_Id?: SortOrder
    Valore?: SortOrder
  }

  export type Materia_IndicatoreSumOrderByAggregateInput = {
    Indicatore_Id?: SortOrder
  }

  export type Materia_DocumentoIdCompoundUniqueInput = {
    Materia_Nome: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Materia_DocumentoCountOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type Materia_DocumentoMaxOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type Materia_DocumentoMinOrderByAggregateInput = {
    Materia_Nome?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type ICFScalarRelationFilter = {
    is?: ICFWhereInput
    isNot?: ICFWhereInput
  }

  export type Documento_ICFIdCompoundUniqueInput = {
    ICF_Codice: string
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Documento_ICFCountOrderByAggregateInput = {
    ICF_Codice?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type Documento_ICFMaxOrderByAggregateInput = {
    ICF_Codice?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type Documento_ICFMinOrderByAggregateInput = {
    ICF_Codice?: SortOrder
    Documento_Anno?: SortOrder
    Documento_Studente_Email?: SortOrder
  }

  export type InsegnamentoCreateNestedManyWithoutDocenteInput = {
    create?: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput> | InsegnamentoCreateWithoutDocenteInput[] | InsegnamentoUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutDocenteInput | InsegnamentoCreateOrConnectWithoutDocenteInput[]
    createMany?: InsegnamentoCreateManyDocenteInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type InsegnamentoUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput> | InsegnamentoCreateWithoutDocenteInput[] | InsegnamentoUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutDocenteInput | InsegnamentoCreateOrConnectWithoutDocenteInput[]
    createMany?: InsegnamentoCreateManyDocenteInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type InsegnamentoUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput> | InsegnamentoCreateWithoutDocenteInput[] | InsegnamentoUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutDocenteInput | InsegnamentoCreateOrConnectWithoutDocenteInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutDocenteInput | InsegnamentoUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: InsegnamentoCreateManyDocenteInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutDocenteInput | InsegnamentoUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutDocenteInput | InsegnamentoUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type InsegnamentoUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput> | InsegnamentoCreateWithoutDocenteInput[] | InsegnamentoUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutDocenteInput | InsegnamentoCreateOrConnectWithoutDocenteInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutDocenteInput | InsegnamentoUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: InsegnamentoCreateManyDocenteInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutDocenteInput | InsegnamentoUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutDocenteInput | InsegnamentoUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type InsegnamentoCreateNestedManyWithoutClasseInput = {
    create?: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput> | InsegnamentoCreateWithoutClasseInput[] | InsegnamentoUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutClasseInput | InsegnamentoCreateOrConnectWithoutClasseInput[]
    createMany?: InsegnamentoCreateManyClasseInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type Classe_StudenteCreateNestedManyWithoutClasseInput = {
    create?: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput> | Classe_StudenteCreateWithoutClasseInput[] | Classe_StudenteUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutClasseInput | Classe_StudenteCreateOrConnectWithoutClasseInput[]
    createMany?: Classe_StudenteCreateManyClasseInputEnvelope
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
  }

  export type InsegnamentoUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput> | InsegnamentoCreateWithoutClasseInput[] | InsegnamentoUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutClasseInput | InsegnamentoCreateOrConnectWithoutClasseInput[]
    createMany?: InsegnamentoCreateManyClasseInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type Classe_StudenteUncheckedCreateNestedManyWithoutClasseInput = {
    create?: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput> | Classe_StudenteCreateWithoutClasseInput[] | Classe_StudenteUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutClasseInput | Classe_StudenteCreateOrConnectWithoutClasseInput[]
    createMany?: Classe_StudenteCreateManyClasseInputEnvelope
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InsegnamentoUpdateManyWithoutClasseNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput> | InsegnamentoCreateWithoutClasseInput[] | InsegnamentoUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutClasseInput | InsegnamentoCreateOrConnectWithoutClasseInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutClasseInput | InsegnamentoUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: InsegnamentoCreateManyClasseInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutClasseInput | InsegnamentoUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutClasseInput | InsegnamentoUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type Classe_StudenteUpdateManyWithoutClasseNestedInput = {
    create?: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput> | Classe_StudenteCreateWithoutClasseInput[] | Classe_StudenteUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutClasseInput | Classe_StudenteCreateOrConnectWithoutClasseInput[]
    upsert?: Classe_StudenteUpsertWithWhereUniqueWithoutClasseInput | Classe_StudenteUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: Classe_StudenteCreateManyClasseInputEnvelope
    set?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    disconnect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    delete?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    update?: Classe_StudenteUpdateWithWhereUniqueWithoutClasseInput | Classe_StudenteUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: Classe_StudenteUpdateManyWithWhereWithoutClasseInput | Classe_StudenteUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
  }

  export type InsegnamentoUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput> | InsegnamentoCreateWithoutClasseInput[] | InsegnamentoUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutClasseInput | InsegnamentoCreateOrConnectWithoutClasseInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutClasseInput | InsegnamentoUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: InsegnamentoCreateManyClasseInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutClasseInput | InsegnamentoUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutClasseInput | InsegnamentoUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type Classe_StudenteUncheckedUpdateManyWithoutClasseNestedInput = {
    create?: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput> | Classe_StudenteCreateWithoutClasseInput[] | Classe_StudenteUncheckedCreateWithoutClasseInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutClasseInput | Classe_StudenteCreateOrConnectWithoutClasseInput[]
    upsert?: Classe_StudenteUpsertWithWhereUniqueWithoutClasseInput | Classe_StudenteUpsertWithWhereUniqueWithoutClasseInput[]
    createMany?: Classe_StudenteCreateManyClasseInputEnvelope
    set?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    disconnect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    delete?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    update?: Classe_StudenteUpdateWithWhereUniqueWithoutClasseInput | Classe_StudenteUpdateWithWhereUniqueWithoutClasseInput[]
    updateMany?: Classe_StudenteUpdateManyWithWhereWithoutClasseInput | Classe_StudenteUpdateManyWithWhereWithoutClasseInput[]
    deleteMany?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
  }

  export type DocumentoCreateNestedManyWithoutStudenteInput = {
    create?: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput> | DocumentoCreateWithoutStudenteInput[] | DocumentoUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutStudenteInput | DocumentoCreateOrConnectWithoutStudenteInput[]
    createMany?: DocumentoCreateManyStudenteInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Classe_StudenteCreateNestedManyWithoutStudenteInput = {
    create?: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput> | Classe_StudenteCreateWithoutStudenteInput[] | Classe_StudenteUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutStudenteInput | Classe_StudenteCreateOrConnectWithoutStudenteInput[]
    createMany?: Classe_StudenteCreateManyStudenteInputEnvelope
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
  }

  export type DocumentoUncheckedCreateNestedManyWithoutStudenteInput = {
    create?: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput> | DocumentoCreateWithoutStudenteInput[] | DocumentoUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutStudenteInput | DocumentoCreateOrConnectWithoutStudenteInput[]
    createMany?: DocumentoCreateManyStudenteInputEnvelope
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
  }

  export type Classe_StudenteUncheckedCreateNestedManyWithoutStudenteInput = {
    create?: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput> | Classe_StudenteCreateWithoutStudenteInput[] | Classe_StudenteUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutStudenteInput | Classe_StudenteCreateOrConnectWithoutStudenteInput[]
    createMany?: Classe_StudenteCreateManyStudenteInputEnvelope
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DocumentoUpdateManyWithoutStudenteNestedInput = {
    create?: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput> | DocumentoCreateWithoutStudenteInput[] | DocumentoUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutStudenteInput | DocumentoCreateOrConnectWithoutStudenteInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutStudenteInput | DocumentoUpsertWithWhereUniqueWithoutStudenteInput[]
    createMany?: DocumentoCreateManyStudenteInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutStudenteInput | DocumentoUpdateWithWhereUniqueWithoutStudenteInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutStudenteInput | DocumentoUpdateManyWithWhereWithoutStudenteInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Classe_StudenteUpdateManyWithoutStudenteNestedInput = {
    create?: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput> | Classe_StudenteCreateWithoutStudenteInput[] | Classe_StudenteUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutStudenteInput | Classe_StudenteCreateOrConnectWithoutStudenteInput[]
    upsert?: Classe_StudenteUpsertWithWhereUniqueWithoutStudenteInput | Classe_StudenteUpsertWithWhereUniqueWithoutStudenteInput[]
    createMany?: Classe_StudenteCreateManyStudenteInputEnvelope
    set?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    disconnect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    delete?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    update?: Classe_StudenteUpdateWithWhereUniqueWithoutStudenteInput | Classe_StudenteUpdateWithWhereUniqueWithoutStudenteInput[]
    updateMany?: Classe_StudenteUpdateManyWithWhereWithoutStudenteInput | Classe_StudenteUpdateManyWithWhereWithoutStudenteInput[]
    deleteMany?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
  }

  export type DocumentoUncheckedUpdateManyWithoutStudenteNestedInput = {
    create?: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput> | DocumentoCreateWithoutStudenteInput[] | DocumentoUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: DocumentoCreateOrConnectWithoutStudenteInput | DocumentoCreateOrConnectWithoutStudenteInput[]
    upsert?: DocumentoUpsertWithWhereUniqueWithoutStudenteInput | DocumentoUpsertWithWhereUniqueWithoutStudenteInput[]
    createMany?: DocumentoCreateManyStudenteInputEnvelope
    set?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    disconnect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    delete?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    connect?: DocumentoWhereUniqueInput | DocumentoWhereUniqueInput[]
    update?: DocumentoUpdateWithWhereUniqueWithoutStudenteInput | DocumentoUpdateWithWhereUniqueWithoutStudenteInput[]
    updateMany?: DocumentoUpdateManyWithWhereWithoutStudenteInput | DocumentoUpdateManyWithWhereWithoutStudenteInput[]
    deleteMany?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
  }

  export type Classe_StudenteUncheckedUpdateManyWithoutStudenteNestedInput = {
    create?: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput> | Classe_StudenteCreateWithoutStudenteInput[] | Classe_StudenteUncheckedCreateWithoutStudenteInput[]
    connectOrCreate?: Classe_StudenteCreateOrConnectWithoutStudenteInput | Classe_StudenteCreateOrConnectWithoutStudenteInput[]
    upsert?: Classe_StudenteUpsertWithWhereUniqueWithoutStudenteInput | Classe_StudenteUpsertWithWhereUniqueWithoutStudenteInput[]
    createMany?: Classe_StudenteCreateManyStudenteInputEnvelope
    set?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    disconnect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    delete?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    connect?: Classe_StudenteWhereUniqueInput | Classe_StudenteWhereUniqueInput[]
    update?: Classe_StudenteUpdateWithWhereUniqueWithoutStudenteInput | Classe_StudenteUpdateWithWhereUniqueWithoutStudenteInput[]
    updateMany?: Classe_StudenteUpdateManyWithWhereWithoutStudenteInput | Classe_StudenteUpdateManyWithWhereWithoutStudenteInput[]
    deleteMany?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
  }

  export type Materia_DocumentoCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput> | Materia_DocumentoCreateWithoutDocumentoInput[] | Materia_DocumentoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutDocumentoInput | Materia_DocumentoCreateOrConnectWithoutDocumentoInput[]
    createMany?: Materia_DocumentoCreateManyDocumentoInputEnvelope
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
  }

  export type Documento_ICFCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput> | Documento_ICFCreateWithoutDocumentoInput[] | Documento_ICFUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutDocumentoInput | Documento_ICFCreateOrConnectWithoutDocumentoInput[]
    createMany?: Documento_ICFCreateManyDocumentoInputEnvelope
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
  }

  export type StudenteCreateNestedOneWithoutDocumentoInput = {
    create?: XOR<StudenteCreateWithoutDocumentoInput, StudenteUncheckedCreateWithoutDocumentoInput>
    connectOrCreate?: StudenteCreateOrConnectWithoutDocumentoInput
    connect?: StudenteWhereUniqueInput
  }

  export type AllegatoCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput> | AllegatoCreateWithoutDocumentoInput[] | AllegatoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: AllegatoCreateOrConnectWithoutDocumentoInput | AllegatoCreateOrConnectWithoutDocumentoInput[]
    createMany?: AllegatoCreateManyDocumentoInputEnvelope
    connect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
  }

  export type Materia_DocumentoUncheckedCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput> | Materia_DocumentoCreateWithoutDocumentoInput[] | Materia_DocumentoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutDocumentoInput | Materia_DocumentoCreateOrConnectWithoutDocumentoInput[]
    createMany?: Materia_DocumentoCreateManyDocumentoInputEnvelope
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
  }

  export type Documento_ICFUncheckedCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput> | Documento_ICFCreateWithoutDocumentoInput[] | Documento_ICFUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutDocumentoInput | Documento_ICFCreateOrConnectWithoutDocumentoInput[]
    createMany?: Documento_ICFCreateManyDocumentoInputEnvelope
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
  }

  export type AllegatoUncheckedCreateNestedManyWithoutDocumentoInput = {
    create?: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput> | AllegatoCreateWithoutDocumentoInput[] | AllegatoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: AllegatoCreateOrConnectWithoutDocumentoInput | AllegatoCreateOrConnectWithoutDocumentoInput[]
    createMany?: AllegatoCreateManyDocumentoInputEnvelope
    connect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
  }

  export type EnumStatoFieldUpdateOperationsInput = {
    set?: $Enums.Stato
  }

  export type EnumTipologia_DocFieldUpdateOperationsInput = {
    set?: $Enums.Tipologia_Doc
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Materia_DocumentoUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput> | Materia_DocumentoCreateWithoutDocumentoInput[] | Materia_DocumentoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutDocumentoInput | Materia_DocumentoCreateOrConnectWithoutDocumentoInput[]
    upsert?: Materia_DocumentoUpsertWithWhereUniqueWithoutDocumentoInput | Materia_DocumentoUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Materia_DocumentoCreateManyDocumentoInputEnvelope
    set?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    disconnect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    delete?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    update?: Materia_DocumentoUpdateWithWhereUniqueWithoutDocumentoInput | Materia_DocumentoUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Materia_DocumentoUpdateManyWithWhereWithoutDocumentoInput | Materia_DocumentoUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
  }

  export type Documento_ICFUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput> | Documento_ICFCreateWithoutDocumentoInput[] | Documento_ICFUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutDocumentoInput | Documento_ICFCreateOrConnectWithoutDocumentoInput[]
    upsert?: Documento_ICFUpsertWithWhereUniqueWithoutDocumentoInput | Documento_ICFUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Documento_ICFCreateManyDocumentoInputEnvelope
    set?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    disconnect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    delete?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    update?: Documento_ICFUpdateWithWhereUniqueWithoutDocumentoInput | Documento_ICFUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Documento_ICFUpdateManyWithWhereWithoutDocumentoInput | Documento_ICFUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
  }

  export type StudenteUpdateOneRequiredWithoutDocumentoNestedInput = {
    create?: XOR<StudenteCreateWithoutDocumentoInput, StudenteUncheckedCreateWithoutDocumentoInput>
    connectOrCreate?: StudenteCreateOrConnectWithoutDocumentoInput
    upsert?: StudenteUpsertWithoutDocumentoInput
    connect?: StudenteWhereUniqueInput
    update?: XOR<XOR<StudenteUpdateToOneWithWhereWithoutDocumentoInput, StudenteUpdateWithoutDocumentoInput>, StudenteUncheckedUpdateWithoutDocumentoInput>
  }

  export type AllegatoUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput> | AllegatoCreateWithoutDocumentoInput[] | AllegatoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: AllegatoCreateOrConnectWithoutDocumentoInput | AllegatoCreateOrConnectWithoutDocumentoInput[]
    upsert?: AllegatoUpsertWithWhereUniqueWithoutDocumentoInput | AllegatoUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: AllegatoCreateManyDocumentoInputEnvelope
    set?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    disconnect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    delete?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    connect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    update?: AllegatoUpdateWithWhereUniqueWithoutDocumentoInput | AllegatoUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: AllegatoUpdateManyWithWhereWithoutDocumentoInput | AllegatoUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: AllegatoScalarWhereInput | AllegatoScalarWhereInput[]
  }

  export type Materia_DocumentoUncheckedUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput> | Materia_DocumentoCreateWithoutDocumentoInput[] | Materia_DocumentoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutDocumentoInput | Materia_DocumentoCreateOrConnectWithoutDocumentoInput[]
    upsert?: Materia_DocumentoUpsertWithWhereUniqueWithoutDocumentoInput | Materia_DocumentoUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Materia_DocumentoCreateManyDocumentoInputEnvelope
    set?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    disconnect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    delete?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    update?: Materia_DocumentoUpdateWithWhereUniqueWithoutDocumentoInput | Materia_DocumentoUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Materia_DocumentoUpdateManyWithWhereWithoutDocumentoInput | Materia_DocumentoUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
  }

  export type Documento_ICFUncheckedUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput> | Documento_ICFCreateWithoutDocumentoInput[] | Documento_ICFUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutDocumentoInput | Documento_ICFCreateOrConnectWithoutDocumentoInput[]
    upsert?: Documento_ICFUpsertWithWhereUniqueWithoutDocumentoInput | Documento_ICFUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: Documento_ICFCreateManyDocumentoInputEnvelope
    set?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    disconnect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    delete?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    update?: Documento_ICFUpdateWithWhereUniqueWithoutDocumentoInput | Documento_ICFUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: Documento_ICFUpdateManyWithWhereWithoutDocumentoInput | Documento_ICFUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
  }

  export type AllegatoUncheckedUpdateManyWithoutDocumentoNestedInput = {
    create?: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput> | AllegatoCreateWithoutDocumentoInput[] | AllegatoUncheckedCreateWithoutDocumentoInput[]
    connectOrCreate?: AllegatoCreateOrConnectWithoutDocumentoInput | AllegatoCreateOrConnectWithoutDocumentoInput[]
    upsert?: AllegatoUpsertWithWhereUniqueWithoutDocumentoInput | AllegatoUpsertWithWhereUniqueWithoutDocumentoInput[]
    createMany?: AllegatoCreateManyDocumentoInputEnvelope
    set?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    disconnect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    delete?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    connect?: AllegatoWhereUniqueInput | AllegatoWhereUniqueInput[]
    update?: AllegatoUpdateWithWhereUniqueWithoutDocumentoInput | AllegatoUpdateWithWhereUniqueWithoutDocumentoInput[]
    updateMany?: AllegatoUpdateManyWithWhereWithoutDocumentoInput | AllegatoUpdateManyWithWhereWithoutDocumentoInput[]
    deleteMany?: AllegatoScalarWhereInput | AllegatoScalarWhereInput[]
  }

  export type InsegnamentoCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput> | InsegnamentoCreateWithoutMateriaInput[] | InsegnamentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutMateriaInput | InsegnamentoCreateOrConnectWithoutMateriaInput[]
    createMany?: InsegnamentoCreateManyMateriaInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type Materia_IndicatoreCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput> | Materia_IndicatoreCreateWithoutMateriaInput[] | Materia_IndicatoreUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutMateriaInput | Materia_IndicatoreCreateOrConnectWithoutMateriaInput[]
    createMany?: Materia_IndicatoreCreateManyMateriaInputEnvelope
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
  }

  export type Materia_DocumentoCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput> | Materia_DocumentoCreateWithoutMateriaInput[] | Materia_DocumentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutMateriaInput | Materia_DocumentoCreateOrConnectWithoutMateriaInput[]
    createMany?: Materia_DocumentoCreateManyMateriaInputEnvelope
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
  }

  export type InsegnamentoUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput> | InsegnamentoCreateWithoutMateriaInput[] | InsegnamentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutMateriaInput | InsegnamentoCreateOrConnectWithoutMateriaInput[]
    createMany?: InsegnamentoCreateManyMateriaInputEnvelope
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
  }

  export type Materia_IndicatoreUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput> | Materia_IndicatoreCreateWithoutMateriaInput[] | Materia_IndicatoreUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutMateriaInput | Materia_IndicatoreCreateOrConnectWithoutMateriaInput[]
    createMany?: Materia_IndicatoreCreateManyMateriaInputEnvelope
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
  }

  export type Materia_DocumentoUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput> | Materia_DocumentoCreateWithoutMateriaInput[] | Materia_DocumentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutMateriaInput | Materia_DocumentoCreateOrConnectWithoutMateriaInput[]
    createMany?: Materia_DocumentoCreateManyMateriaInputEnvelope
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
  }

  export type InsegnamentoUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput> | InsegnamentoCreateWithoutMateriaInput[] | InsegnamentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutMateriaInput | InsegnamentoCreateOrConnectWithoutMateriaInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutMateriaInput | InsegnamentoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InsegnamentoCreateManyMateriaInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutMateriaInput | InsegnamentoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutMateriaInput | InsegnamentoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type Materia_IndicatoreUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput> | Materia_IndicatoreCreateWithoutMateriaInput[] | Materia_IndicatoreUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutMateriaInput | Materia_IndicatoreCreateOrConnectWithoutMateriaInput[]
    upsert?: Materia_IndicatoreUpsertWithWhereUniqueWithoutMateriaInput | Materia_IndicatoreUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Materia_IndicatoreCreateManyMateriaInputEnvelope
    set?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    disconnect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    delete?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    update?: Materia_IndicatoreUpdateWithWhereUniqueWithoutMateriaInput | Materia_IndicatoreUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Materia_IndicatoreUpdateManyWithWhereWithoutMateriaInput | Materia_IndicatoreUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
  }

  export type Materia_DocumentoUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput> | Materia_DocumentoCreateWithoutMateriaInput[] | Materia_DocumentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutMateriaInput | Materia_DocumentoCreateOrConnectWithoutMateriaInput[]
    upsert?: Materia_DocumentoUpsertWithWhereUniqueWithoutMateriaInput | Materia_DocumentoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Materia_DocumentoCreateManyMateriaInputEnvelope
    set?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    disconnect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    delete?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    update?: Materia_DocumentoUpdateWithWhereUniqueWithoutMateriaInput | Materia_DocumentoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Materia_DocumentoUpdateManyWithWhereWithoutMateriaInput | Materia_DocumentoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
  }

  export type InsegnamentoUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput> | InsegnamentoCreateWithoutMateriaInput[] | InsegnamentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: InsegnamentoCreateOrConnectWithoutMateriaInput | InsegnamentoCreateOrConnectWithoutMateriaInput[]
    upsert?: InsegnamentoUpsertWithWhereUniqueWithoutMateriaInput | InsegnamentoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: InsegnamentoCreateManyMateriaInputEnvelope
    set?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    disconnect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    delete?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    connect?: InsegnamentoWhereUniqueInput | InsegnamentoWhereUniqueInput[]
    update?: InsegnamentoUpdateWithWhereUniqueWithoutMateriaInput | InsegnamentoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: InsegnamentoUpdateManyWithWhereWithoutMateriaInput | InsegnamentoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
  }

  export type Materia_IndicatoreUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput> | Materia_IndicatoreCreateWithoutMateriaInput[] | Materia_IndicatoreUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutMateriaInput | Materia_IndicatoreCreateOrConnectWithoutMateriaInput[]
    upsert?: Materia_IndicatoreUpsertWithWhereUniqueWithoutMateriaInput | Materia_IndicatoreUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Materia_IndicatoreCreateManyMateriaInputEnvelope
    set?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    disconnect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    delete?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    update?: Materia_IndicatoreUpdateWithWhereUniqueWithoutMateriaInput | Materia_IndicatoreUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Materia_IndicatoreUpdateManyWithWhereWithoutMateriaInput | Materia_IndicatoreUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
  }

  export type Materia_DocumentoUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput> | Materia_DocumentoCreateWithoutMateriaInput[] | Materia_DocumentoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: Materia_DocumentoCreateOrConnectWithoutMateriaInput | Materia_DocumentoCreateOrConnectWithoutMateriaInput[]
    upsert?: Materia_DocumentoUpsertWithWhereUniqueWithoutMateriaInput | Materia_DocumentoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: Materia_DocumentoCreateManyMateriaInputEnvelope
    set?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    disconnect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    delete?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    connect?: Materia_DocumentoWhereUniqueInput | Materia_DocumentoWhereUniqueInput[]
    update?: Materia_DocumentoUpdateWithWhereUniqueWithoutMateriaInput | Materia_DocumentoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: Materia_DocumentoUpdateManyWithWhereWithoutMateriaInput | Materia_DocumentoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
  }

  export type Materia_IndicatoreCreateNestedManyWithoutIndicatoreInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput> | Materia_IndicatoreCreateWithoutIndicatoreInput[] | Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput | Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput[]
    createMany?: Materia_IndicatoreCreateManyIndicatoreInputEnvelope
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
  }

  export type Materia_IndicatoreUncheckedCreateNestedManyWithoutIndicatoreInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput> | Materia_IndicatoreCreateWithoutIndicatoreInput[] | Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput | Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput[]
    createMany?: Materia_IndicatoreCreateManyIndicatoreInputEnvelope
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
  }

  export type EnumTipologia_IndFieldUpdateOperationsInput = {
    set?: $Enums.Tipologia_Ind
  }

  export type EnumCategoriaFieldUpdateOperationsInput = {
    set?: $Enums.Categoria
  }

  export type Materia_IndicatoreUpdateManyWithoutIndicatoreNestedInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput> | Materia_IndicatoreCreateWithoutIndicatoreInput[] | Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput | Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput[]
    upsert?: Materia_IndicatoreUpsertWithWhereUniqueWithoutIndicatoreInput | Materia_IndicatoreUpsertWithWhereUniqueWithoutIndicatoreInput[]
    createMany?: Materia_IndicatoreCreateManyIndicatoreInputEnvelope
    set?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    disconnect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    delete?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    update?: Materia_IndicatoreUpdateWithWhereUniqueWithoutIndicatoreInput | Materia_IndicatoreUpdateWithWhereUniqueWithoutIndicatoreInput[]
    updateMany?: Materia_IndicatoreUpdateManyWithWhereWithoutIndicatoreInput | Materia_IndicatoreUpdateManyWithWhereWithoutIndicatoreInput[]
    deleteMany?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
  }

  export type Materia_IndicatoreUncheckedUpdateManyWithoutIndicatoreNestedInput = {
    create?: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput> | Materia_IndicatoreCreateWithoutIndicatoreInput[] | Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput[]
    connectOrCreate?: Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput | Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput[]
    upsert?: Materia_IndicatoreUpsertWithWhereUniqueWithoutIndicatoreInput | Materia_IndicatoreUpsertWithWhereUniqueWithoutIndicatoreInput[]
    createMany?: Materia_IndicatoreCreateManyIndicatoreInputEnvelope
    set?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    disconnect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    delete?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    connect?: Materia_IndicatoreWhereUniqueInput | Materia_IndicatoreWhereUniqueInput[]
    update?: Materia_IndicatoreUpdateWithWhereUniqueWithoutIndicatoreInput | Materia_IndicatoreUpdateWithWhereUniqueWithoutIndicatoreInput[]
    updateMany?: Materia_IndicatoreUpdateManyWithWhereWithoutIndicatoreInput | Materia_IndicatoreUpdateManyWithWhereWithoutIndicatoreInput[]
    deleteMany?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
  }

  export type DocumentoCreateNestedOneWithoutAllegatiInput = {
    create?: XOR<DocumentoCreateWithoutAllegatiInput, DocumentoUncheckedCreateWithoutAllegatiInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutAllegatiInput
    connect?: DocumentoWhereUniqueInput
  }

  export type DocumentoUpdateOneRequiredWithoutAllegatiNestedInput = {
    create?: XOR<DocumentoCreateWithoutAllegatiInput, DocumentoUncheckedCreateWithoutAllegatiInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutAllegatiInput
    upsert?: DocumentoUpsertWithoutAllegatiInput
    connect?: DocumentoWhereUniqueInput
    update?: XOR<XOR<DocumentoUpdateToOneWithWhereWithoutAllegatiInput, DocumentoUpdateWithoutAllegatiInput>, DocumentoUncheckedUpdateWithoutAllegatiInput>
  }

  export type Documento_ICFCreateNestedManyWithoutICFInput = {
    create?: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput> | Documento_ICFCreateWithoutICFInput[] | Documento_ICFUncheckedCreateWithoutICFInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutICFInput | Documento_ICFCreateOrConnectWithoutICFInput[]
    createMany?: Documento_ICFCreateManyICFInputEnvelope
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
  }

  export type Documento_ICFUncheckedCreateNestedManyWithoutICFInput = {
    create?: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput> | Documento_ICFCreateWithoutICFInput[] | Documento_ICFUncheckedCreateWithoutICFInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutICFInput | Documento_ICFCreateOrConnectWithoutICFInput[]
    createMany?: Documento_ICFCreateManyICFInputEnvelope
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Documento_ICFUpdateManyWithoutICFNestedInput = {
    create?: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput> | Documento_ICFCreateWithoutICFInput[] | Documento_ICFUncheckedCreateWithoutICFInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutICFInput | Documento_ICFCreateOrConnectWithoutICFInput[]
    upsert?: Documento_ICFUpsertWithWhereUniqueWithoutICFInput | Documento_ICFUpsertWithWhereUniqueWithoutICFInput[]
    createMany?: Documento_ICFCreateManyICFInputEnvelope
    set?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    disconnect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    delete?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    update?: Documento_ICFUpdateWithWhereUniqueWithoutICFInput | Documento_ICFUpdateWithWhereUniqueWithoutICFInput[]
    updateMany?: Documento_ICFUpdateManyWithWhereWithoutICFInput | Documento_ICFUpdateManyWithWhereWithoutICFInput[]
    deleteMany?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
  }

  export type Documento_ICFUncheckedUpdateManyWithoutICFNestedInput = {
    create?: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput> | Documento_ICFCreateWithoutICFInput[] | Documento_ICFUncheckedCreateWithoutICFInput[]
    connectOrCreate?: Documento_ICFCreateOrConnectWithoutICFInput | Documento_ICFCreateOrConnectWithoutICFInput[]
    upsert?: Documento_ICFUpsertWithWhereUniqueWithoutICFInput | Documento_ICFUpsertWithWhereUniqueWithoutICFInput[]
    createMany?: Documento_ICFCreateManyICFInputEnvelope
    set?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    disconnect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    delete?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    connect?: Documento_ICFWhereUniqueInput | Documento_ICFWhereUniqueInput[]
    update?: Documento_ICFUpdateWithWhereUniqueWithoutICFInput | Documento_ICFUpdateWithWhereUniqueWithoutICFInput[]
    updateMany?: Documento_ICFUpdateManyWithWhereWithoutICFInput | Documento_ICFUpdateManyWithWhereWithoutICFInput[]
    deleteMany?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
  }

  export type DocenteCreateNestedOneWithoutInsegnamentiInput = {
    create?: XOR<DocenteCreateWithoutInsegnamentiInput, DocenteUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutInsegnamentiInput
    connect?: DocenteWhereUniqueInput
  }

  export type ClasseCreateNestedOneWithoutInsegnamentiInput = {
    create?: XOR<ClasseCreateWithoutInsegnamentiInput, ClasseUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutInsegnamentiInput
    connect?: ClasseWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutInsegnamentiInput = {
    create?: XOR<MateriaCreateWithoutInsegnamentiInput, MateriaUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInsegnamentiInput
    connect?: MateriaWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutInsegnamentiNestedInput = {
    create?: XOR<DocenteCreateWithoutInsegnamentiInput, DocenteUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutInsegnamentiInput
    upsert?: DocenteUpsertWithoutInsegnamentiInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutInsegnamentiInput, DocenteUpdateWithoutInsegnamentiInput>, DocenteUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type ClasseUpdateOneRequiredWithoutInsegnamentiNestedInput = {
    create?: XOR<ClasseCreateWithoutInsegnamentiInput, ClasseUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutInsegnamentiInput
    upsert?: ClasseUpsertWithoutInsegnamentiInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutInsegnamentiInput, ClasseUpdateWithoutInsegnamentiInput>, ClasseUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type MateriaUpdateOneRequiredWithoutInsegnamentiNestedInput = {
    create?: XOR<MateriaCreateWithoutInsegnamentiInput, MateriaUncheckedCreateWithoutInsegnamentiInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutInsegnamentiInput
    upsert?: MateriaUpsertWithoutInsegnamentiInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutInsegnamentiInput, MateriaUpdateWithoutInsegnamentiInput>, MateriaUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type ClasseCreateNestedOneWithoutClassi_StudenteInput = {
    create?: XOR<ClasseCreateWithoutClassi_StudenteInput, ClasseUncheckedCreateWithoutClassi_StudenteInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutClassi_StudenteInput
    connect?: ClasseWhereUniqueInput
  }

  export type StudenteCreateNestedOneWithoutClassi_StudenteInput = {
    create?: XOR<StudenteCreateWithoutClassi_StudenteInput, StudenteUncheckedCreateWithoutClassi_StudenteInput>
    connectOrCreate?: StudenteCreateOrConnectWithoutClassi_StudenteInput
    connect?: StudenteWhereUniqueInput
  }

  export type ClasseUpdateOneRequiredWithoutClassi_StudenteNestedInput = {
    create?: XOR<ClasseCreateWithoutClassi_StudenteInput, ClasseUncheckedCreateWithoutClassi_StudenteInput>
    connectOrCreate?: ClasseCreateOrConnectWithoutClassi_StudenteInput
    upsert?: ClasseUpsertWithoutClassi_StudenteInput
    connect?: ClasseWhereUniqueInput
    update?: XOR<XOR<ClasseUpdateToOneWithWhereWithoutClassi_StudenteInput, ClasseUpdateWithoutClassi_StudenteInput>, ClasseUncheckedUpdateWithoutClassi_StudenteInput>
  }

  export type StudenteUpdateOneRequiredWithoutClassi_StudenteNestedInput = {
    create?: XOR<StudenteCreateWithoutClassi_StudenteInput, StudenteUncheckedCreateWithoutClassi_StudenteInput>
    connectOrCreate?: StudenteCreateOrConnectWithoutClassi_StudenteInput
    upsert?: StudenteUpsertWithoutClassi_StudenteInput
    connect?: StudenteWhereUniqueInput
    update?: XOR<XOR<StudenteUpdateToOneWithWhereWithoutClassi_StudenteInput, StudenteUpdateWithoutClassi_StudenteInput>, StudenteUncheckedUpdateWithoutClassi_StudenteInput>
  }

  export type MateriaCreateNestedOneWithoutMaterie_IndicatoreInput = {
    create?: XOR<MateriaCreateWithoutMaterie_IndicatoreInput, MateriaUncheckedCreateWithoutMaterie_IndicatoreInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutMaterie_IndicatoreInput
    connect?: MateriaWhereUniqueInput
  }

  export type IndicatoreCreateNestedOneWithoutMateria_IndicatoriInput = {
    create?: XOR<IndicatoreCreateWithoutMateria_IndicatoriInput, IndicatoreUncheckedCreateWithoutMateria_IndicatoriInput>
    connectOrCreate?: IndicatoreCreateOrConnectWithoutMateria_IndicatoriInput
    connect?: IndicatoreWhereUniqueInput
  }

  export type MateriaUpdateOneRequiredWithoutMaterie_IndicatoreNestedInput = {
    create?: XOR<MateriaCreateWithoutMaterie_IndicatoreInput, MateriaUncheckedCreateWithoutMaterie_IndicatoreInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutMaterie_IndicatoreInput
    upsert?: MateriaUpsertWithoutMaterie_IndicatoreInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutMaterie_IndicatoreInput, MateriaUpdateWithoutMaterie_IndicatoreInput>, MateriaUncheckedUpdateWithoutMaterie_IndicatoreInput>
  }

  export type IndicatoreUpdateOneRequiredWithoutMateria_IndicatoriNestedInput = {
    create?: XOR<IndicatoreCreateWithoutMateria_IndicatoriInput, IndicatoreUncheckedCreateWithoutMateria_IndicatoriInput>
    connectOrCreate?: IndicatoreCreateOrConnectWithoutMateria_IndicatoriInput
    upsert?: IndicatoreUpsertWithoutMateria_IndicatoriInput
    connect?: IndicatoreWhereUniqueInput
    update?: XOR<XOR<IndicatoreUpdateToOneWithWhereWithoutMateria_IndicatoriInput, IndicatoreUpdateWithoutMateria_IndicatoriInput>, IndicatoreUncheckedUpdateWithoutMateria_IndicatoriInput>
  }

  export type MateriaCreateNestedOneWithoutMaterie_DocumentoInput = {
    create?: XOR<MateriaCreateWithoutMaterie_DocumentoInput, MateriaUncheckedCreateWithoutMaterie_DocumentoInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutMaterie_DocumentoInput
    connect?: MateriaWhereUniqueInput
  }

  export type DocumentoCreateNestedOneWithoutMaterie_DocumentoInput = {
    create?: XOR<DocumentoCreateWithoutMaterie_DocumentoInput, DocumentoUncheckedCreateWithoutMaterie_DocumentoInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutMaterie_DocumentoInput
    connect?: DocumentoWhereUniqueInput
  }

  export type MateriaUpdateOneRequiredWithoutMaterie_DocumentoNestedInput = {
    create?: XOR<MateriaCreateWithoutMaterie_DocumentoInput, MateriaUncheckedCreateWithoutMaterie_DocumentoInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutMaterie_DocumentoInput
    upsert?: MateriaUpsertWithoutMaterie_DocumentoInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutMaterie_DocumentoInput, MateriaUpdateWithoutMaterie_DocumentoInput>, MateriaUncheckedUpdateWithoutMaterie_DocumentoInput>
  }

  export type DocumentoUpdateOneRequiredWithoutMaterie_DocumentoNestedInput = {
    create?: XOR<DocumentoCreateWithoutMaterie_DocumentoInput, DocumentoUncheckedCreateWithoutMaterie_DocumentoInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutMaterie_DocumentoInput
    upsert?: DocumentoUpsertWithoutMaterie_DocumentoInput
    connect?: DocumentoWhereUniqueInput
    update?: XOR<XOR<DocumentoUpdateToOneWithWhereWithoutMaterie_DocumentoInput, DocumentoUpdateWithoutMaterie_DocumentoInput>, DocumentoUncheckedUpdateWithoutMaterie_DocumentoInput>
  }

  export type ICFCreateNestedOneWithoutDocumenti_ICFInput = {
    create?: XOR<ICFCreateWithoutDocumenti_ICFInput, ICFUncheckedCreateWithoutDocumenti_ICFInput>
    connectOrCreate?: ICFCreateOrConnectWithoutDocumenti_ICFInput
    connect?: ICFWhereUniqueInput
  }

  export type DocumentoCreateNestedOneWithoutDocumento_ICFsInput = {
    create?: XOR<DocumentoCreateWithoutDocumento_ICFsInput, DocumentoUncheckedCreateWithoutDocumento_ICFsInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutDocumento_ICFsInput
    connect?: DocumentoWhereUniqueInput
  }

  export type ICFUpdateOneRequiredWithoutDocumenti_ICFNestedInput = {
    create?: XOR<ICFCreateWithoutDocumenti_ICFInput, ICFUncheckedCreateWithoutDocumenti_ICFInput>
    connectOrCreate?: ICFCreateOrConnectWithoutDocumenti_ICFInput
    upsert?: ICFUpsertWithoutDocumenti_ICFInput
    connect?: ICFWhereUniqueInput
    update?: XOR<XOR<ICFUpdateToOneWithWhereWithoutDocumenti_ICFInput, ICFUpdateWithoutDocumenti_ICFInput>, ICFUncheckedUpdateWithoutDocumenti_ICFInput>
  }

  export type DocumentoUpdateOneRequiredWithoutDocumento_ICFsNestedInput = {
    create?: XOR<DocumentoCreateWithoutDocumento_ICFsInput, DocumentoUncheckedCreateWithoutDocumento_ICFsInput>
    connectOrCreate?: DocumentoCreateOrConnectWithoutDocumento_ICFsInput
    upsert?: DocumentoUpsertWithoutDocumento_ICFsInput
    connect?: DocumentoWhereUniqueInput
    update?: XOR<XOR<DocumentoUpdateToOneWithWhereWithoutDocumento_ICFsInput, DocumentoUpdateWithoutDocumento_ICFsInput>, DocumentoUncheckedUpdateWithoutDocumento_ICFsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatoFilter<$PrismaModel = never> = {
    equals?: $Enums.Stato | EnumStatoFieldRefInput<$PrismaModel>
    in?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatoFilter<$PrismaModel> | $Enums.Stato
  }

  export type NestedEnumTipologia_DocFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Doc | EnumTipologia_DocFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_DocFilter<$PrismaModel> | $Enums.Tipologia_Doc
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stato | EnumStatoFieldRefInput<$PrismaModel>
    in?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stato[] | ListEnumStatoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatoWithAggregatesFilter<$PrismaModel> | $Enums.Stato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoFilter<$PrismaModel>
    _max?: NestedEnumStatoFilter<$PrismaModel>
  }

  export type NestedEnumTipologia_DocWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Doc | EnumTipologia_DocFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Doc[] | ListEnumTipologia_DocFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_DocWithAggregatesFilter<$PrismaModel> | $Enums.Tipologia_Doc
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipologia_DocFilter<$PrismaModel>
    _max?: NestedEnumTipologia_DocFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipologia_IndFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Ind | EnumTipologia_IndFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_IndFilter<$PrismaModel> | $Enums.Tipologia_Ind
  }

  export type NestedEnumCategoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaFilter<$PrismaModel> | $Enums.Categoria
  }

  export type NestedEnumTipologia_IndWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tipologia_Ind | EnumTipologia_IndFieldRefInput<$PrismaModel>
    in?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tipologia_Ind[] | ListEnumTipologia_IndFieldRefInput<$PrismaModel>
    not?: NestedEnumTipologia_IndWithAggregatesFilter<$PrismaModel> | $Enums.Tipologia_Ind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipologia_IndFilter<$PrismaModel>
    _max?: NestedEnumTipologia_IndFilter<$PrismaModel>
  }

  export type NestedEnumCategoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Categoria | EnumCategoriaFieldRefInput<$PrismaModel>
    in?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Categoria[] | ListEnumCategoriaFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoriaWithAggregatesFilter<$PrismaModel> | $Enums.Categoria
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaFilter<$PrismaModel>
    _max?: NestedEnumCategoriaFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InsegnamentoCreateWithoutDocenteInput = {
    Classe: ClasseCreateNestedOneWithoutInsegnamentiInput
    Materia: MateriaCreateNestedOneWithoutInsegnamentiInput
  }

  export type InsegnamentoUncheckedCreateWithoutDocenteInput = {
    Classe_Id: number
    Materia_Nome: string
  }

  export type InsegnamentoCreateOrConnectWithoutDocenteInput = {
    where: InsegnamentoWhereUniqueInput
    create: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput>
  }

  export type InsegnamentoCreateManyDocenteInputEnvelope = {
    data: InsegnamentoCreateManyDocenteInput | InsegnamentoCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type InsegnamentoUpsertWithWhereUniqueWithoutDocenteInput = {
    where: InsegnamentoWhereUniqueInput
    update: XOR<InsegnamentoUpdateWithoutDocenteInput, InsegnamentoUncheckedUpdateWithoutDocenteInput>
    create: XOR<InsegnamentoCreateWithoutDocenteInput, InsegnamentoUncheckedCreateWithoutDocenteInput>
  }

  export type InsegnamentoUpdateWithWhereUniqueWithoutDocenteInput = {
    where: InsegnamentoWhereUniqueInput
    data: XOR<InsegnamentoUpdateWithoutDocenteInput, InsegnamentoUncheckedUpdateWithoutDocenteInput>
  }

  export type InsegnamentoUpdateManyWithWhereWithoutDocenteInput = {
    where: InsegnamentoScalarWhereInput
    data: XOR<InsegnamentoUpdateManyMutationInput, InsegnamentoUncheckedUpdateManyWithoutDocenteInput>
  }

  export type InsegnamentoScalarWhereInput = {
    AND?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
    OR?: InsegnamentoScalarWhereInput[]
    NOT?: InsegnamentoScalarWhereInput | InsegnamentoScalarWhereInput[]
    Docente_Email?: StringFilter<"Insegnamento"> | string
    Classe_Id?: IntFilter<"Insegnamento"> | number
    Materia_Nome?: StringFilter<"Insegnamento"> | string
  }

  export type InsegnamentoCreateWithoutClasseInput = {
    Docente: DocenteCreateNestedOneWithoutInsegnamentiInput
    Materia: MateriaCreateNestedOneWithoutInsegnamentiInput
  }

  export type InsegnamentoUncheckedCreateWithoutClasseInput = {
    Docente_Email: string
    Materia_Nome: string
  }

  export type InsegnamentoCreateOrConnectWithoutClasseInput = {
    where: InsegnamentoWhereUniqueInput
    create: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput>
  }

  export type InsegnamentoCreateManyClasseInputEnvelope = {
    data: InsegnamentoCreateManyClasseInput | InsegnamentoCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type Classe_StudenteCreateWithoutClasseInput = {
    Studente: StudenteCreateNestedOneWithoutClassi_StudenteInput
  }

  export type Classe_StudenteUncheckedCreateWithoutClasseInput = {
    Studente_Email: string
  }

  export type Classe_StudenteCreateOrConnectWithoutClasseInput = {
    where: Classe_StudenteWhereUniqueInput
    create: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput>
  }

  export type Classe_StudenteCreateManyClasseInputEnvelope = {
    data: Classe_StudenteCreateManyClasseInput | Classe_StudenteCreateManyClasseInput[]
    skipDuplicates?: boolean
  }

  export type InsegnamentoUpsertWithWhereUniqueWithoutClasseInput = {
    where: InsegnamentoWhereUniqueInput
    update: XOR<InsegnamentoUpdateWithoutClasseInput, InsegnamentoUncheckedUpdateWithoutClasseInput>
    create: XOR<InsegnamentoCreateWithoutClasseInput, InsegnamentoUncheckedCreateWithoutClasseInput>
  }

  export type InsegnamentoUpdateWithWhereUniqueWithoutClasseInput = {
    where: InsegnamentoWhereUniqueInput
    data: XOR<InsegnamentoUpdateWithoutClasseInput, InsegnamentoUncheckedUpdateWithoutClasseInput>
  }

  export type InsegnamentoUpdateManyWithWhereWithoutClasseInput = {
    where: InsegnamentoScalarWhereInput
    data: XOR<InsegnamentoUpdateManyMutationInput, InsegnamentoUncheckedUpdateManyWithoutClasseInput>
  }

  export type Classe_StudenteUpsertWithWhereUniqueWithoutClasseInput = {
    where: Classe_StudenteWhereUniqueInput
    update: XOR<Classe_StudenteUpdateWithoutClasseInput, Classe_StudenteUncheckedUpdateWithoutClasseInput>
    create: XOR<Classe_StudenteCreateWithoutClasseInput, Classe_StudenteUncheckedCreateWithoutClasseInput>
  }

  export type Classe_StudenteUpdateWithWhereUniqueWithoutClasseInput = {
    where: Classe_StudenteWhereUniqueInput
    data: XOR<Classe_StudenteUpdateWithoutClasseInput, Classe_StudenteUncheckedUpdateWithoutClasseInput>
  }

  export type Classe_StudenteUpdateManyWithWhereWithoutClasseInput = {
    where: Classe_StudenteScalarWhereInput
    data: XOR<Classe_StudenteUpdateManyMutationInput, Classe_StudenteUncheckedUpdateManyWithoutClasseInput>
  }

  export type Classe_StudenteScalarWhereInput = {
    AND?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
    OR?: Classe_StudenteScalarWhereInput[]
    NOT?: Classe_StudenteScalarWhereInput | Classe_StudenteScalarWhereInput[]
    Classe_Id?: IntFilter<"Classe_Studente"> | number
    Studente_Email?: StringFilter<"Classe_Studente"> | string
  }

  export type DocumentoCreateWithoutStudenteInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFCreateNestedManyWithoutDocumentoInput
    Allegati?: AllegatoCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutStudenteInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFUncheckedCreateNestedManyWithoutDocumentoInput
    Allegati?: AllegatoUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutStudenteInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput>
  }

  export type DocumentoCreateManyStudenteInputEnvelope = {
    data: DocumentoCreateManyStudenteInput | DocumentoCreateManyStudenteInput[]
    skipDuplicates?: boolean
  }

  export type Classe_StudenteCreateWithoutStudenteInput = {
    Classe: ClasseCreateNestedOneWithoutClassi_StudenteInput
  }

  export type Classe_StudenteUncheckedCreateWithoutStudenteInput = {
    Classe_Id: number
  }

  export type Classe_StudenteCreateOrConnectWithoutStudenteInput = {
    where: Classe_StudenteWhereUniqueInput
    create: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput>
  }

  export type Classe_StudenteCreateManyStudenteInputEnvelope = {
    data: Classe_StudenteCreateManyStudenteInput | Classe_StudenteCreateManyStudenteInput[]
    skipDuplicates?: boolean
  }

  export type DocumentoUpsertWithWhereUniqueWithoutStudenteInput = {
    where: DocumentoWhereUniqueInput
    update: XOR<DocumentoUpdateWithoutStudenteInput, DocumentoUncheckedUpdateWithoutStudenteInput>
    create: XOR<DocumentoCreateWithoutStudenteInput, DocumentoUncheckedCreateWithoutStudenteInput>
  }

  export type DocumentoUpdateWithWhereUniqueWithoutStudenteInput = {
    where: DocumentoWhereUniqueInput
    data: XOR<DocumentoUpdateWithoutStudenteInput, DocumentoUncheckedUpdateWithoutStudenteInput>
  }

  export type DocumentoUpdateManyWithWhereWithoutStudenteInput = {
    where: DocumentoScalarWhereInput
    data: XOR<DocumentoUpdateManyMutationInput, DocumentoUncheckedUpdateManyWithoutStudenteInput>
  }

  export type DocumentoScalarWhereInput = {
    AND?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    OR?: DocumentoScalarWhereInput[]
    NOT?: DocumentoScalarWhereInput | DocumentoScalarWhereInput[]
    Studente_Email?: StringFilter<"Documento"> | string
    Anno?: DateTimeFilter<"Documento"> | Date | string
    Stato?: EnumStatoFilter<"Documento"> | $Enums.Stato
    Tipologia?: EnumTipologia_DocFilter<"Documento"> | $Enums.Tipologia_Doc
    Data_Approvazione?: DateTimeNullableFilter<"Documento"> | Date | string | null
  }

  export type Classe_StudenteUpsertWithWhereUniqueWithoutStudenteInput = {
    where: Classe_StudenteWhereUniqueInput
    update: XOR<Classe_StudenteUpdateWithoutStudenteInput, Classe_StudenteUncheckedUpdateWithoutStudenteInput>
    create: XOR<Classe_StudenteCreateWithoutStudenteInput, Classe_StudenteUncheckedCreateWithoutStudenteInput>
  }

  export type Classe_StudenteUpdateWithWhereUniqueWithoutStudenteInput = {
    where: Classe_StudenteWhereUniqueInput
    data: XOR<Classe_StudenteUpdateWithoutStudenteInput, Classe_StudenteUncheckedUpdateWithoutStudenteInput>
  }

  export type Classe_StudenteUpdateManyWithWhereWithoutStudenteInput = {
    where: Classe_StudenteScalarWhereInput
    data: XOR<Classe_StudenteUpdateManyMutationInput, Classe_StudenteUncheckedUpdateManyWithoutStudenteInput>
  }

  export type Materia_DocumentoCreateWithoutDocumentoInput = {
    Materia: MateriaCreateNestedOneWithoutMaterie_DocumentoInput
  }

  export type Materia_DocumentoUncheckedCreateWithoutDocumentoInput = {
    Materia_Nome: string
  }

  export type Materia_DocumentoCreateOrConnectWithoutDocumentoInput = {
    where: Materia_DocumentoWhereUniqueInput
    create: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput>
  }

  export type Materia_DocumentoCreateManyDocumentoInputEnvelope = {
    data: Materia_DocumentoCreateManyDocumentoInput | Materia_DocumentoCreateManyDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type Documento_ICFCreateWithoutDocumentoInput = {
    ICF: ICFCreateNestedOneWithoutDocumenti_ICFInput
  }

  export type Documento_ICFUncheckedCreateWithoutDocumentoInput = {
    ICF_Codice: string
  }

  export type Documento_ICFCreateOrConnectWithoutDocumentoInput = {
    where: Documento_ICFWhereUniqueInput
    create: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput>
  }

  export type Documento_ICFCreateManyDocumentoInputEnvelope = {
    data: Documento_ICFCreateManyDocumentoInput | Documento_ICFCreateManyDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type StudenteCreateWithoutDocumentoInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Classi_Studente?: Classe_StudenteCreateNestedManyWithoutStudenteInput
  }

  export type StudenteUncheckedCreateWithoutDocumentoInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Classi_Studente?: Classe_StudenteUncheckedCreateNestedManyWithoutStudenteInput
  }

  export type StudenteCreateOrConnectWithoutDocumentoInput = {
    where: StudenteWhereUniqueInput
    create: XOR<StudenteCreateWithoutDocumentoInput, StudenteUncheckedCreateWithoutDocumentoInput>
  }

  export type AllegatoCreateWithoutDocumentoInput = {
    Nome: string
    Percorso: string
  }

  export type AllegatoUncheckedCreateWithoutDocumentoInput = {
    Id?: number
    Nome: string
    Percorso: string
  }

  export type AllegatoCreateOrConnectWithoutDocumentoInput = {
    where: AllegatoWhereUniqueInput
    create: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput>
  }

  export type AllegatoCreateManyDocumentoInputEnvelope = {
    data: AllegatoCreateManyDocumentoInput | AllegatoCreateManyDocumentoInput[]
    skipDuplicates?: boolean
  }

  export type Materia_DocumentoUpsertWithWhereUniqueWithoutDocumentoInput = {
    where: Materia_DocumentoWhereUniqueInput
    update: XOR<Materia_DocumentoUpdateWithoutDocumentoInput, Materia_DocumentoUncheckedUpdateWithoutDocumentoInput>
    create: XOR<Materia_DocumentoCreateWithoutDocumentoInput, Materia_DocumentoUncheckedCreateWithoutDocumentoInput>
  }

  export type Materia_DocumentoUpdateWithWhereUniqueWithoutDocumentoInput = {
    where: Materia_DocumentoWhereUniqueInput
    data: XOR<Materia_DocumentoUpdateWithoutDocumentoInput, Materia_DocumentoUncheckedUpdateWithoutDocumentoInput>
  }

  export type Materia_DocumentoUpdateManyWithWhereWithoutDocumentoInput = {
    where: Materia_DocumentoScalarWhereInput
    data: XOR<Materia_DocumentoUpdateManyMutationInput, Materia_DocumentoUncheckedUpdateManyWithoutDocumentoInput>
  }

  export type Materia_DocumentoScalarWhereInput = {
    AND?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
    OR?: Materia_DocumentoScalarWhereInput[]
    NOT?: Materia_DocumentoScalarWhereInput | Materia_DocumentoScalarWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Documento"> | string
    Documento_Anno?: DateTimeFilter<"Materia_Documento"> | Date | string
    Documento_Studente_Email?: StringFilter<"Materia_Documento"> | string
  }

  export type Documento_ICFUpsertWithWhereUniqueWithoutDocumentoInput = {
    where: Documento_ICFWhereUniqueInput
    update: XOR<Documento_ICFUpdateWithoutDocumentoInput, Documento_ICFUncheckedUpdateWithoutDocumentoInput>
    create: XOR<Documento_ICFCreateWithoutDocumentoInput, Documento_ICFUncheckedCreateWithoutDocumentoInput>
  }

  export type Documento_ICFUpdateWithWhereUniqueWithoutDocumentoInput = {
    where: Documento_ICFWhereUniqueInput
    data: XOR<Documento_ICFUpdateWithoutDocumentoInput, Documento_ICFUncheckedUpdateWithoutDocumentoInput>
  }

  export type Documento_ICFUpdateManyWithWhereWithoutDocumentoInput = {
    where: Documento_ICFScalarWhereInput
    data: XOR<Documento_ICFUpdateManyMutationInput, Documento_ICFUncheckedUpdateManyWithoutDocumentoInput>
  }

  export type Documento_ICFScalarWhereInput = {
    AND?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
    OR?: Documento_ICFScalarWhereInput[]
    NOT?: Documento_ICFScalarWhereInput | Documento_ICFScalarWhereInput[]
    ICF_Codice?: StringFilter<"Documento_ICF"> | string
    Documento_Anno?: DateTimeFilter<"Documento_ICF"> | Date | string
    Documento_Studente_Email?: StringFilter<"Documento_ICF"> | string
  }

  export type StudenteUpsertWithoutDocumentoInput = {
    update: XOR<StudenteUpdateWithoutDocumentoInput, StudenteUncheckedUpdateWithoutDocumentoInput>
    create: XOR<StudenteCreateWithoutDocumentoInput, StudenteUncheckedCreateWithoutDocumentoInput>
    where?: StudenteWhereInput
  }

  export type StudenteUpdateToOneWithWhereWithoutDocumentoInput = {
    where?: StudenteWhereInput
    data: XOR<StudenteUpdateWithoutDocumentoInput, StudenteUncheckedUpdateWithoutDocumentoInput>
  }

  export type StudenteUpdateWithoutDocumentoInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Classi_Studente?: Classe_StudenteUpdateManyWithoutStudenteNestedInput
  }

  export type StudenteUncheckedUpdateWithoutDocumentoInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Classi_Studente?: Classe_StudenteUncheckedUpdateManyWithoutStudenteNestedInput
  }

  export type AllegatoUpsertWithWhereUniqueWithoutDocumentoInput = {
    where: AllegatoWhereUniqueInput
    update: XOR<AllegatoUpdateWithoutDocumentoInput, AllegatoUncheckedUpdateWithoutDocumentoInput>
    create: XOR<AllegatoCreateWithoutDocumentoInput, AllegatoUncheckedCreateWithoutDocumentoInput>
  }

  export type AllegatoUpdateWithWhereUniqueWithoutDocumentoInput = {
    where: AllegatoWhereUniqueInput
    data: XOR<AllegatoUpdateWithoutDocumentoInput, AllegatoUncheckedUpdateWithoutDocumentoInput>
  }

  export type AllegatoUpdateManyWithWhereWithoutDocumentoInput = {
    where: AllegatoScalarWhereInput
    data: XOR<AllegatoUpdateManyMutationInput, AllegatoUncheckedUpdateManyWithoutDocumentoInput>
  }

  export type AllegatoScalarWhereInput = {
    AND?: AllegatoScalarWhereInput | AllegatoScalarWhereInput[]
    OR?: AllegatoScalarWhereInput[]
    NOT?: AllegatoScalarWhereInput | AllegatoScalarWhereInput[]
    Id?: IntFilter<"Allegato"> | number
    Nome?: StringFilter<"Allegato"> | string
    Percorso?: StringFilter<"Allegato"> | string
    Documento_Studente_Email?: StringFilter<"Allegato"> | string
    Documento_Anno?: DateTimeFilter<"Allegato"> | Date | string
  }

  export type InsegnamentoCreateWithoutMateriaInput = {
    Docente: DocenteCreateNestedOneWithoutInsegnamentiInput
    Classe: ClasseCreateNestedOneWithoutInsegnamentiInput
  }

  export type InsegnamentoUncheckedCreateWithoutMateriaInput = {
    Docente_Email: string
    Classe_Id: number
  }

  export type InsegnamentoCreateOrConnectWithoutMateriaInput = {
    where: InsegnamentoWhereUniqueInput
    create: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput>
  }

  export type InsegnamentoCreateManyMateriaInputEnvelope = {
    data: InsegnamentoCreateManyMateriaInput | InsegnamentoCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type Materia_IndicatoreCreateWithoutMateriaInput = {
    Valore: boolean
    Indicatore: IndicatoreCreateNestedOneWithoutMateria_IndicatoriInput
  }

  export type Materia_IndicatoreUncheckedCreateWithoutMateriaInput = {
    Indicatore_Id: number
    Valore: boolean
  }

  export type Materia_IndicatoreCreateOrConnectWithoutMateriaInput = {
    where: Materia_IndicatoreWhereUniqueInput
    create: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput>
  }

  export type Materia_IndicatoreCreateManyMateriaInputEnvelope = {
    data: Materia_IndicatoreCreateManyMateriaInput | Materia_IndicatoreCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type Materia_DocumentoCreateWithoutMateriaInput = {
    Documento: DocumentoCreateNestedOneWithoutMaterie_DocumentoInput
  }

  export type Materia_DocumentoUncheckedCreateWithoutMateriaInput = {
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Materia_DocumentoCreateOrConnectWithoutMateriaInput = {
    where: Materia_DocumentoWhereUniqueInput
    create: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput>
  }

  export type Materia_DocumentoCreateManyMateriaInputEnvelope = {
    data: Materia_DocumentoCreateManyMateriaInput | Materia_DocumentoCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type InsegnamentoUpsertWithWhereUniqueWithoutMateriaInput = {
    where: InsegnamentoWhereUniqueInput
    update: XOR<InsegnamentoUpdateWithoutMateriaInput, InsegnamentoUncheckedUpdateWithoutMateriaInput>
    create: XOR<InsegnamentoCreateWithoutMateriaInput, InsegnamentoUncheckedCreateWithoutMateriaInput>
  }

  export type InsegnamentoUpdateWithWhereUniqueWithoutMateriaInput = {
    where: InsegnamentoWhereUniqueInput
    data: XOR<InsegnamentoUpdateWithoutMateriaInput, InsegnamentoUncheckedUpdateWithoutMateriaInput>
  }

  export type InsegnamentoUpdateManyWithWhereWithoutMateriaInput = {
    where: InsegnamentoScalarWhereInput
    data: XOR<InsegnamentoUpdateManyMutationInput, InsegnamentoUncheckedUpdateManyWithoutMateriaInput>
  }

  export type Materia_IndicatoreUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Materia_IndicatoreWhereUniqueInput
    update: XOR<Materia_IndicatoreUpdateWithoutMateriaInput, Materia_IndicatoreUncheckedUpdateWithoutMateriaInput>
    create: XOR<Materia_IndicatoreCreateWithoutMateriaInput, Materia_IndicatoreUncheckedCreateWithoutMateriaInput>
  }

  export type Materia_IndicatoreUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Materia_IndicatoreWhereUniqueInput
    data: XOR<Materia_IndicatoreUpdateWithoutMateriaInput, Materia_IndicatoreUncheckedUpdateWithoutMateriaInput>
  }

  export type Materia_IndicatoreUpdateManyWithWhereWithoutMateriaInput = {
    where: Materia_IndicatoreScalarWhereInput
    data: XOR<Materia_IndicatoreUpdateManyMutationInput, Materia_IndicatoreUncheckedUpdateManyWithoutMateriaInput>
  }

  export type Materia_IndicatoreScalarWhereInput = {
    AND?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
    OR?: Materia_IndicatoreScalarWhereInput[]
    NOT?: Materia_IndicatoreScalarWhereInput | Materia_IndicatoreScalarWhereInput[]
    Materia_Nome?: StringFilter<"Materia_Indicatore"> | string
    Indicatore_Id?: IntFilter<"Materia_Indicatore"> | number
    Valore?: BoolFilter<"Materia_Indicatore"> | boolean
  }

  export type Materia_DocumentoUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Materia_DocumentoWhereUniqueInput
    update: XOR<Materia_DocumentoUpdateWithoutMateriaInput, Materia_DocumentoUncheckedUpdateWithoutMateriaInput>
    create: XOR<Materia_DocumentoCreateWithoutMateriaInput, Materia_DocumentoUncheckedCreateWithoutMateriaInput>
  }

  export type Materia_DocumentoUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Materia_DocumentoWhereUniqueInput
    data: XOR<Materia_DocumentoUpdateWithoutMateriaInput, Materia_DocumentoUncheckedUpdateWithoutMateriaInput>
  }

  export type Materia_DocumentoUpdateManyWithWhereWithoutMateriaInput = {
    where: Materia_DocumentoScalarWhereInput
    data: XOR<Materia_DocumentoUpdateManyMutationInput, Materia_DocumentoUncheckedUpdateManyWithoutMateriaInput>
  }

  export type Materia_IndicatoreCreateWithoutIndicatoreInput = {
    Valore: boolean
    Materia: MateriaCreateNestedOneWithoutMaterie_IndicatoreInput
  }

  export type Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput = {
    Materia_Nome: string
    Valore: boolean
  }

  export type Materia_IndicatoreCreateOrConnectWithoutIndicatoreInput = {
    where: Materia_IndicatoreWhereUniqueInput
    create: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput>
  }

  export type Materia_IndicatoreCreateManyIndicatoreInputEnvelope = {
    data: Materia_IndicatoreCreateManyIndicatoreInput | Materia_IndicatoreCreateManyIndicatoreInput[]
    skipDuplicates?: boolean
  }

  export type Materia_IndicatoreUpsertWithWhereUniqueWithoutIndicatoreInput = {
    where: Materia_IndicatoreWhereUniqueInput
    update: XOR<Materia_IndicatoreUpdateWithoutIndicatoreInput, Materia_IndicatoreUncheckedUpdateWithoutIndicatoreInput>
    create: XOR<Materia_IndicatoreCreateWithoutIndicatoreInput, Materia_IndicatoreUncheckedCreateWithoutIndicatoreInput>
  }

  export type Materia_IndicatoreUpdateWithWhereUniqueWithoutIndicatoreInput = {
    where: Materia_IndicatoreWhereUniqueInput
    data: XOR<Materia_IndicatoreUpdateWithoutIndicatoreInput, Materia_IndicatoreUncheckedUpdateWithoutIndicatoreInput>
  }

  export type Materia_IndicatoreUpdateManyWithWhereWithoutIndicatoreInput = {
    where: Materia_IndicatoreScalarWhereInput
    data: XOR<Materia_IndicatoreUpdateManyMutationInput, Materia_IndicatoreUncheckedUpdateManyWithoutIndicatoreInput>
  }

  export type DocumentoCreateWithoutAllegatiInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFCreateNestedManyWithoutDocumentoInput
    Studente: StudenteCreateNestedOneWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutAllegatiInput = {
    Studente_Email: string
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutDocumentoInput
    Documento_ICFs?: Documento_ICFUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutAllegatiInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutAllegatiInput, DocumentoUncheckedCreateWithoutAllegatiInput>
  }

  export type DocumentoUpsertWithoutAllegatiInput = {
    update: XOR<DocumentoUpdateWithoutAllegatiInput, DocumentoUncheckedUpdateWithoutAllegatiInput>
    create: XOR<DocumentoCreateWithoutAllegatiInput, DocumentoUncheckedCreateWithoutAllegatiInput>
    where?: DocumentoWhereInput
  }

  export type DocumentoUpdateToOneWithWhereWithoutAllegatiInput = {
    where?: DocumentoWhereInput
    data: XOR<DocumentoUpdateWithoutAllegatiInput, DocumentoUncheckedUpdateWithoutAllegatiInput>
  }

  export type DocumentoUpdateWithoutAllegatiInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUpdateManyWithoutDocumentoNestedInput
    Studente?: StudenteUpdateOneRequiredWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutAllegatiInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type Documento_ICFCreateWithoutICFInput = {
    Documento: DocumentoCreateNestedOneWithoutDocumento_ICFsInput
  }

  export type Documento_ICFUncheckedCreateWithoutICFInput = {
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Documento_ICFCreateOrConnectWithoutICFInput = {
    where: Documento_ICFWhereUniqueInput
    create: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput>
  }

  export type Documento_ICFCreateManyICFInputEnvelope = {
    data: Documento_ICFCreateManyICFInput | Documento_ICFCreateManyICFInput[]
    skipDuplicates?: boolean
  }

  export type Documento_ICFUpsertWithWhereUniqueWithoutICFInput = {
    where: Documento_ICFWhereUniqueInput
    update: XOR<Documento_ICFUpdateWithoutICFInput, Documento_ICFUncheckedUpdateWithoutICFInput>
    create: XOR<Documento_ICFCreateWithoutICFInput, Documento_ICFUncheckedCreateWithoutICFInput>
  }

  export type Documento_ICFUpdateWithWhereUniqueWithoutICFInput = {
    where: Documento_ICFWhereUniqueInput
    data: XOR<Documento_ICFUpdateWithoutICFInput, Documento_ICFUncheckedUpdateWithoutICFInput>
  }

  export type Documento_ICFUpdateManyWithWhereWithoutICFInput = {
    where: Documento_ICFScalarWhereInput
    data: XOR<Documento_ICFUpdateManyMutationInput, Documento_ICFUncheckedUpdateManyWithoutICFInput>
  }

  export type DocenteCreateWithoutInsegnamentiInput = {
    Email: string
    Nome: string
    Cognome: string
  }

  export type DocenteUncheckedCreateWithoutInsegnamentiInput = {
    Email: string
    Nome: string
    Cognome: string
  }

  export type DocenteCreateOrConnectWithoutInsegnamentiInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutInsegnamentiInput, DocenteUncheckedCreateWithoutInsegnamentiInput>
  }

  export type ClasseCreateWithoutInsegnamentiInput = {
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Classi_Studente?: Classe_StudenteCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateWithoutInsegnamentiInput = {
    Id?: number
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Classi_Studente?: Classe_StudenteUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseCreateOrConnectWithoutInsegnamentiInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutInsegnamentiInput, ClasseUncheckedCreateWithoutInsegnamentiInput>
  }

  export type MateriaCreateWithoutInsegnamentiInput = {
    Nome: string
    Materie_Indicatore?: Materia_IndicatoreCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutInsegnamentiInput = {
    Nome: string
    Materie_Indicatore?: Materia_IndicatoreUncheckedCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutInsegnamentiInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutInsegnamentiInput, MateriaUncheckedCreateWithoutInsegnamentiInput>
  }

  export type DocenteUpsertWithoutInsegnamentiInput = {
    update: XOR<DocenteUpdateWithoutInsegnamentiInput, DocenteUncheckedUpdateWithoutInsegnamentiInput>
    create: XOR<DocenteCreateWithoutInsegnamentiInput, DocenteUncheckedCreateWithoutInsegnamentiInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutInsegnamentiInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutInsegnamentiInput, DocenteUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type DocenteUpdateWithoutInsegnamentiInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateWithoutInsegnamentiInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
  }

  export type ClasseUpsertWithoutInsegnamentiInput = {
    update: XOR<ClasseUpdateWithoutInsegnamentiInput, ClasseUncheckedUpdateWithoutInsegnamentiInput>
    create: XOR<ClasseCreateWithoutInsegnamentiInput, ClasseUncheckedCreateWithoutInsegnamentiInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutInsegnamentiInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutInsegnamentiInput, ClasseUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type ClasseUpdateWithoutInsegnamentiInput = {
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Classi_Studente?: Classe_StudenteUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateWithoutInsegnamentiInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Classi_Studente?: Classe_StudenteUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type MateriaUpsertWithoutInsegnamentiInput = {
    update: XOR<MateriaUpdateWithoutInsegnamentiInput, MateriaUncheckedUpdateWithoutInsegnamentiInput>
    create: XOR<MateriaCreateWithoutInsegnamentiInput, MateriaUncheckedCreateWithoutInsegnamentiInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutInsegnamentiInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutInsegnamentiInput, MateriaUncheckedUpdateWithoutInsegnamentiInput>
  }

  export type MateriaUpdateWithoutInsegnamentiInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Materie_Indicatore?: Materia_IndicatoreUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutInsegnamentiInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Materie_Indicatore?: Materia_IndicatoreUncheckedUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type ClasseCreateWithoutClassi_StudenteInput = {
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutClasseInput
  }

  export type ClasseUncheckedCreateWithoutClassi_StudenteInput = {
    Id?: number
    Classe: number
    Sezione: string
    Indirizzo: string
    Anno_Scolastico?: Date | string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutClasseInput
  }

  export type ClasseCreateOrConnectWithoutClassi_StudenteInput = {
    where: ClasseWhereUniqueInput
    create: XOR<ClasseCreateWithoutClassi_StudenteInput, ClasseUncheckedCreateWithoutClassi_StudenteInput>
  }

  export type StudenteCreateWithoutClassi_StudenteInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Documento?: DocumentoCreateNestedManyWithoutStudenteInput
  }

  export type StudenteUncheckedCreateWithoutClassi_StudenteInput = {
    Email: string
    Nome: string
    Cognome: string
    DSA_BES: boolean
    Documento?: DocumentoUncheckedCreateNestedManyWithoutStudenteInput
  }

  export type StudenteCreateOrConnectWithoutClassi_StudenteInput = {
    where: StudenteWhereUniqueInput
    create: XOR<StudenteCreateWithoutClassi_StudenteInput, StudenteUncheckedCreateWithoutClassi_StudenteInput>
  }

  export type ClasseUpsertWithoutClassi_StudenteInput = {
    update: XOR<ClasseUpdateWithoutClassi_StudenteInput, ClasseUncheckedUpdateWithoutClassi_StudenteInput>
    create: XOR<ClasseCreateWithoutClassi_StudenteInput, ClasseUncheckedCreateWithoutClassi_StudenteInput>
    where?: ClasseWhereInput
  }

  export type ClasseUpdateToOneWithWhereWithoutClassi_StudenteInput = {
    where?: ClasseWhereInput
    data: XOR<ClasseUpdateWithoutClassi_StudenteInput, ClasseUncheckedUpdateWithoutClassi_StudenteInput>
  }

  export type ClasseUpdateWithoutClassi_StudenteInput = {
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutClasseNestedInput
  }

  export type ClasseUncheckedUpdateWithoutClassi_StudenteInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Classe?: IntFieldUpdateOperationsInput | number
    Sezione?: StringFieldUpdateOperationsInput | string
    Indirizzo?: StringFieldUpdateOperationsInput | string
    Anno_Scolastico?: DateTimeFieldUpdateOperationsInput | Date | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutClasseNestedInput
  }

  export type StudenteUpsertWithoutClassi_StudenteInput = {
    update: XOR<StudenteUpdateWithoutClassi_StudenteInput, StudenteUncheckedUpdateWithoutClassi_StudenteInput>
    create: XOR<StudenteCreateWithoutClassi_StudenteInput, StudenteUncheckedCreateWithoutClassi_StudenteInput>
    where?: StudenteWhereInput
  }

  export type StudenteUpdateToOneWithWhereWithoutClassi_StudenteInput = {
    where?: StudenteWhereInput
    data: XOR<StudenteUpdateWithoutClassi_StudenteInput, StudenteUncheckedUpdateWithoutClassi_StudenteInput>
  }

  export type StudenteUpdateWithoutClassi_StudenteInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Documento?: DocumentoUpdateManyWithoutStudenteNestedInput
  }

  export type StudenteUncheckedUpdateWithoutClassi_StudenteInput = {
    Email?: StringFieldUpdateOperationsInput | string
    Nome?: StringFieldUpdateOperationsInput | string
    Cognome?: StringFieldUpdateOperationsInput | string
    DSA_BES?: BoolFieldUpdateOperationsInput | boolean
    Documento?: DocumentoUncheckedUpdateManyWithoutStudenteNestedInput
  }

  export type MateriaCreateWithoutMaterie_IndicatoreInput = {
    Nome: string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutMaterie_IndicatoreInput = {
    Nome: string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutMateriaInput
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutMaterie_IndicatoreInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutMaterie_IndicatoreInput, MateriaUncheckedCreateWithoutMaterie_IndicatoreInput>
  }

  export type IndicatoreCreateWithoutMateria_IndicatoriInput = {
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
  }

  export type IndicatoreUncheckedCreateWithoutMateria_IndicatoriInput = {
    Id?: number
    Tipologia: $Enums.Tipologia_Ind
    Categoria: $Enums.Categoria
    Descrizione: string
  }

  export type IndicatoreCreateOrConnectWithoutMateria_IndicatoriInput = {
    where: IndicatoreWhereUniqueInput
    create: XOR<IndicatoreCreateWithoutMateria_IndicatoriInput, IndicatoreUncheckedCreateWithoutMateria_IndicatoriInput>
  }

  export type MateriaUpsertWithoutMaterie_IndicatoreInput = {
    update: XOR<MateriaUpdateWithoutMaterie_IndicatoreInput, MateriaUncheckedUpdateWithoutMaterie_IndicatoreInput>
    create: XOR<MateriaCreateWithoutMaterie_IndicatoreInput, MateriaUncheckedCreateWithoutMaterie_IndicatoreInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutMaterie_IndicatoreInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutMaterie_IndicatoreInput, MateriaUncheckedUpdateWithoutMaterie_IndicatoreInput>
  }

  export type MateriaUpdateWithoutMaterie_IndicatoreInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutMaterie_IndicatoreInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutMateriaNestedInput
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type IndicatoreUpsertWithoutMateria_IndicatoriInput = {
    update: XOR<IndicatoreUpdateWithoutMateria_IndicatoriInput, IndicatoreUncheckedUpdateWithoutMateria_IndicatoriInput>
    create: XOR<IndicatoreCreateWithoutMateria_IndicatoriInput, IndicatoreUncheckedCreateWithoutMateria_IndicatoriInput>
    where?: IndicatoreWhereInput
  }

  export type IndicatoreUpdateToOneWithWhereWithoutMateria_IndicatoriInput = {
    where?: IndicatoreWhereInput
    data: XOR<IndicatoreUpdateWithoutMateria_IndicatoriInput, IndicatoreUncheckedUpdateWithoutMateria_IndicatoriInput>
  }

  export type IndicatoreUpdateWithoutMateria_IndicatoriInput = {
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
  }

  export type IndicatoreUncheckedUpdateWithoutMateria_IndicatoriInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Tipologia?: EnumTipologia_IndFieldUpdateOperationsInput | $Enums.Tipologia_Ind
    Categoria?: EnumCategoriaFieldUpdateOperationsInput | $Enums.Categoria
    Descrizione?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateWithoutMaterie_DocumentoInput = {
    Nome: string
    Insegnamenti?: InsegnamentoCreateNestedManyWithoutMateriaInput
    Materie_Indicatore?: Materia_IndicatoreCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutMaterie_DocumentoInput = {
    Nome: string
    Insegnamenti?: InsegnamentoUncheckedCreateNestedManyWithoutMateriaInput
    Materie_Indicatore?: Materia_IndicatoreUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutMaterie_DocumentoInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutMaterie_DocumentoInput, MateriaUncheckedCreateWithoutMaterie_DocumentoInput>
  }

  export type DocumentoCreateWithoutMaterie_DocumentoInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Documento_ICFs?: Documento_ICFCreateNestedManyWithoutDocumentoInput
    Studente: StudenteCreateNestedOneWithoutDocumentoInput
    Allegati?: AllegatoCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutMaterie_DocumentoInput = {
    Studente_Email: string
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Documento_ICFs?: Documento_ICFUncheckedCreateNestedManyWithoutDocumentoInput
    Allegati?: AllegatoUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutMaterie_DocumentoInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutMaterie_DocumentoInput, DocumentoUncheckedCreateWithoutMaterie_DocumentoInput>
  }

  export type MateriaUpsertWithoutMaterie_DocumentoInput = {
    update: XOR<MateriaUpdateWithoutMaterie_DocumentoInput, MateriaUncheckedUpdateWithoutMaterie_DocumentoInput>
    create: XOR<MateriaCreateWithoutMaterie_DocumentoInput, MateriaUncheckedCreateWithoutMaterie_DocumentoInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutMaterie_DocumentoInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutMaterie_DocumentoInput, MateriaUncheckedUpdateWithoutMaterie_DocumentoInput>
  }

  export type MateriaUpdateWithoutMaterie_DocumentoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUpdateManyWithoutMateriaNestedInput
    Materie_Indicatore?: Materia_IndicatoreUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutMaterie_DocumentoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Insegnamenti?: InsegnamentoUncheckedUpdateManyWithoutMateriaNestedInput
    Materie_Indicatore?: Materia_IndicatoreUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type DocumentoUpsertWithoutMaterie_DocumentoInput = {
    update: XOR<DocumentoUpdateWithoutMaterie_DocumentoInput, DocumentoUncheckedUpdateWithoutMaterie_DocumentoInput>
    create: XOR<DocumentoCreateWithoutMaterie_DocumentoInput, DocumentoUncheckedCreateWithoutMaterie_DocumentoInput>
    where?: DocumentoWhereInput
  }

  export type DocumentoUpdateToOneWithWhereWithoutMaterie_DocumentoInput = {
    where?: DocumentoWhereInput
    data: XOR<DocumentoUpdateWithoutMaterie_DocumentoInput, DocumentoUncheckedUpdateWithoutMaterie_DocumentoInput>
  }

  export type DocumentoUpdateWithoutMaterie_DocumentoInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Documento_ICFs?: Documento_ICFUpdateManyWithoutDocumentoNestedInput
    Studente?: StudenteUpdateOneRequiredWithoutDocumentoNestedInput
    Allegati?: AllegatoUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutMaterie_DocumentoInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Documento_ICFs?: Documento_ICFUncheckedUpdateManyWithoutDocumentoNestedInput
    Allegati?: AllegatoUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type ICFCreateWithoutDocumenti_ICFInput = {
    Codice: string
    Descrizione?: string | null
  }

  export type ICFUncheckedCreateWithoutDocumenti_ICFInput = {
    Codice: string
    Descrizione?: string | null
  }

  export type ICFCreateOrConnectWithoutDocumenti_ICFInput = {
    where: ICFWhereUniqueInput
    create: XOR<ICFCreateWithoutDocumenti_ICFInput, ICFUncheckedCreateWithoutDocumenti_ICFInput>
  }

  export type DocumentoCreateWithoutDocumento_ICFsInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoCreateNestedManyWithoutDocumentoInput
    Studente: StudenteCreateNestedOneWithoutDocumentoInput
    Allegati?: AllegatoCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoUncheckedCreateWithoutDocumento_ICFsInput = {
    Studente_Email: string
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedCreateNestedManyWithoutDocumentoInput
    Allegati?: AllegatoUncheckedCreateNestedManyWithoutDocumentoInput
  }

  export type DocumentoCreateOrConnectWithoutDocumento_ICFsInput = {
    where: DocumentoWhereUniqueInput
    create: XOR<DocumentoCreateWithoutDocumento_ICFsInput, DocumentoUncheckedCreateWithoutDocumento_ICFsInput>
  }

  export type ICFUpsertWithoutDocumenti_ICFInput = {
    update: XOR<ICFUpdateWithoutDocumenti_ICFInput, ICFUncheckedUpdateWithoutDocumenti_ICFInput>
    create: XOR<ICFCreateWithoutDocumenti_ICFInput, ICFUncheckedCreateWithoutDocumenti_ICFInput>
    where?: ICFWhereInput
  }

  export type ICFUpdateToOneWithWhereWithoutDocumenti_ICFInput = {
    where?: ICFWhereInput
    data: XOR<ICFUpdateWithoutDocumenti_ICFInput, ICFUncheckedUpdateWithoutDocumenti_ICFInput>
  }

  export type ICFUpdateWithoutDocumenti_ICFInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ICFUncheckedUpdateWithoutDocumenti_ICFInput = {
    Codice?: StringFieldUpdateOperationsInput | string
    Descrizione?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentoUpsertWithoutDocumento_ICFsInput = {
    update: XOR<DocumentoUpdateWithoutDocumento_ICFsInput, DocumentoUncheckedUpdateWithoutDocumento_ICFsInput>
    create: XOR<DocumentoCreateWithoutDocumento_ICFsInput, DocumentoUncheckedCreateWithoutDocumento_ICFsInput>
    where?: DocumentoWhereInput
  }

  export type DocumentoUpdateToOneWithWhereWithoutDocumento_ICFsInput = {
    where?: DocumentoWhereInput
    data: XOR<DocumentoUpdateWithoutDocumento_ICFsInput, DocumentoUncheckedUpdateWithoutDocumento_ICFsInput>
  }

  export type DocumentoUpdateWithoutDocumento_ICFsInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutDocumentoNestedInput
    Studente?: StudenteUpdateOneRequiredWithoutDocumentoNestedInput
    Allegati?: AllegatoUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutDocumento_ICFsInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutDocumentoNestedInput
    Allegati?: AllegatoUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type InsegnamentoCreateManyDocenteInput = {
    Classe_Id: number
    Materia_Nome: string
  }

  export type InsegnamentoUpdateWithoutDocenteInput = {
    Classe?: ClasseUpdateOneRequiredWithoutInsegnamentiNestedInput
    Materia?: MateriaUpdateOneRequiredWithoutInsegnamentiNestedInput
  }

  export type InsegnamentoUncheckedUpdateWithoutDocenteInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type InsegnamentoUncheckedUpdateManyWithoutDocenteInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type InsegnamentoCreateManyClasseInput = {
    Docente_Email: string
    Materia_Nome: string
  }

  export type Classe_StudenteCreateManyClasseInput = {
    Studente_Email: string
  }

  export type InsegnamentoUpdateWithoutClasseInput = {
    Docente?: DocenteUpdateOneRequiredWithoutInsegnamentiNestedInput
    Materia?: MateriaUpdateOneRequiredWithoutInsegnamentiNestedInput
  }

  export type InsegnamentoUncheckedUpdateWithoutClasseInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type InsegnamentoUncheckedUpdateManyWithoutClasseInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type Classe_StudenteUpdateWithoutClasseInput = {
    Studente?: StudenteUpdateOneRequiredWithoutClassi_StudenteNestedInput
  }

  export type Classe_StudenteUncheckedUpdateWithoutClasseInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Classe_StudenteUncheckedUpdateManyWithoutClasseInput = {
    Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentoCreateManyStudenteInput = {
    Anno?: Date | string
    Stato: $Enums.Stato
    Tipologia: $Enums.Tipologia_Doc
    Data_Approvazione?: Date | string | null
  }

  export type Classe_StudenteCreateManyStudenteInput = {
    Classe_Id: number
  }

  export type DocumentoUpdateWithoutStudenteInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUpdateManyWithoutDocumentoNestedInput
    Allegati?: AllegatoUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateWithoutStudenteInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Materie_Documento?: Materia_DocumentoUncheckedUpdateManyWithoutDocumentoNestedInput
    Documento_ICFs?: Documento_ICFUncheckedUpdateManyWithoutDocumentoNestedInput
    Allegati?: AllegatoUncheckedUpdateManyWithoutDocumentoNestedInput
  }

  export type DocumentoUncheckedUpdateManyWithoutStudenteInput = {
    Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Stato?: EnumStatoFieldUpdateOperationsInput | $Enums.Stato
    Tipologia?: EnumTipologia_DocFieldUpdateOperationsInput | $Enums.Tipologia_Doc
    Data_Approvazione?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Classe_StudenteUpdateWithoutStudenteInput = {
    Classe?: ClasseUpdateOneRequiredWithoutClassi_StudenteNestedInput
  }

  export type Classe_StudenteUncheckedUpdateWithoutStudenteInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
  }

  export type Classe_StudenteUncheckedUpdateManyWithoutStudenteInput = {
    Classe_Id?: IntFieldUpdateOperationsInput | number
  }

  export type Materia_DocumentoCreateManyDocumentoInput = {
    Materia_Nome: string
  }

  export type Documento_ICFCreateManyDocumentoInput = {
    ICF_Codice: string
  }

  export type AllegatoCreateManyDocumentoInput = {
    Id?: number
    Nome: string
    Percorso: string
  }

  export type Materia_DocumentoUpdateWithoutDocumentoInput = {
    Materia?: MateriaUpdateOneRequiredWithoutMaterie_DocumentoNestedInput
  }

  export type Materia_DocumentoUncheckedUpdateWithoutDocumentoInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type Materia_DocumentoUncheckedUpdateManyWithoutDocumentoInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
  }

  export type Documento_ICFUpdateWithoutDocumentoInput = {
    ICF?: ICFUpdateOneRequiredWithoutDocumenti_ICFNestedInput
  }

  export type Documento_ICFUncheckedUpdateWithoutDocumentoInput = {
    ICF_Codice?: StringFieldUpdateOperationsInput | string
  }

  export type Documento_ICFUncheckedUpdateManyWithoutDocumentoInput = {
    ICF_Codice?: StringFieldUpdateOperationsInput | string
  }

  export type AllegatoUpdateWithoutDocumentoInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
  }

  export type AllegatoUncheckedUpdateWithoutDocumentoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
  }

  export type AllegatoUncheckedUpdateManyWithoutDocumentoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Percorso?: StringFieldUpdateOperationsInput | string
  }

  export type InsegnamentoCreateManyMateriaInput = {
    Docente_Email: string
    Classe_Id: number
  }

  export type Materia_IndicatoreCreateManyMateriaInput = {
    Indicatore_Id: number
    Valore: boolean
  }

  export type Materia_DocumentoCreateManyMateriaInput = {
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type InsegnamentoUpdateWithoutMateriaInput = {
    Docente?: DocenteUpdateOneRequiredWithoutInsegnamentiNestedInput
    Classe?: ClasseUpdateOneRequiredWithoutInsegnamentiNestedInput
  }

  export type InsegnamentoUncheckedUpdateWithoutMateriaInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Classe_Id?: IntFieldUpdateOperationsInput | number
  }

  export type InsegnamentoUncheckedUpdateManyWithoutMateriaInput = {
    Docente_Email?: StringFieldUpdateOperationsInput | string
    Classe_Id?: IntFieldUpdateOperationsInput | number
  }

  export type Materia_IndicatoreUpdateWithoutMateriaInput = {
    Valore?: BoolFieldUpdateOperationsInput | boolean
    Indicatore?: IndicatoreUpdateOneRequiredWithoutMateria_IndicatoriNestedInput
  }

  export type Materia_IndicatoreUncheckedUpdateWithoutMateriaInput = {
    Indicatore_Id?: IntFieldUpdateOperationsInput | number
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_IndicatoreUncheckedUpdateManyWithoutMateriaInput = {
    Indicatore_Id?: IntFieldUpdateOperationsInput | number
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_DocumentoUpdateWithoutMateriaInput = {
    Documento?: DocumentoUpdateOneRequiredWithoutMaterie_DocumentoNestedInput
  }

  export type Materia_DocumentoUncheckedUpdateWithoutMateriaInput = {
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Materia_DocumentoUncheckedUpdateManyWithoutMateriaInput = {
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Materia_IndicatoreCreateManyIndicatoreInput = {
    Materia_Nome: string
    Valore: boolean
  }

  export type Materia_IndicatoreUpdateWithoutIndicatoreInput = {
    Valore?: BoolFieldUpdateOperationsInput | boolean
    Materia?: MateriaUpdateOneRequiredWithoutMaterie_IndicatoreNestedInput
  }

  export type Materia_IndicatoreUncheckedUpdateWithoutIndicatoreInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Materia_IndicatoreUncheckedUpdateManyWithoutIndicatoreInput = {
    Materia_Nome?: StringFieldUpdateOperationsInput | string
    Valore?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Documento_ICFCreateManyICFInput = {
    Documento_Anno: Date | string
    Documento_Studente_Email: string
  }

  export type Documento_ICFUpdateWithoutICFInput = {
    Documento?: DocumentoUpdateOneRequiredWithoutDocumento_ICFsNestedInput
  }

  export type Documento_ICFUncheckedUpdateWithoutICFInput = {
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }

  export type Documento_ICFUncheckedUpdateManyWithoutICFInput = {
    Documento_Anno?: DateTimeFieldUpdateOperationsInput | Date | string
    Documento_Studente_Email?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}