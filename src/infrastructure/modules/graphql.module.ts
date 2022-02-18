import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {join} from "path";

import {BooksModule} from './books.module';
import {UserModule} from "./user.module";

@Module({
    imports: [GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
        sortSchema: true,
        playground: true,
    }), BooksModule,UserModule],
    providers: [],
})
export class GraphqlModule {
}
