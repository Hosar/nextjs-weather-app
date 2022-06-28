import "reflect-metadata";
import "dotenv/config";
import { Query, Resolver, buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { WeatherResolver } from "./resolvers/weather.resolver";

@Resolver()
class HelloResolver {
    @Query(() => String)
    async hello() {
        return "Hello World";
    }
}

const main = async () => {

    const port = 4000;
    const schema = await buildSchema({
        resolvers: [HelloResolver, WeatherResolver],
    });

    const apolloServer = new ApolloServer({ schema: schema });
    const app = Express();
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.listen(port, () => {
        console.log(`App started on http://localhost:${port}/grapql`);
    });
};

main();
