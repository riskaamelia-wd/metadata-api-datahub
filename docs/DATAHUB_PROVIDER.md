# DataHub Provider

DataHub menggunakan GraphQL.

Provider hanya bertugas mengirim GraphQL Query.

GraphQL Query tidak boleh ditulis di Service.

Semua query berada di

src/graphql/queries

Provider akan memanggil

execute(query, variables)

Controller tidak mengetahui GraphQL.

Service tidak mengetahui endpoint GraphQL.
