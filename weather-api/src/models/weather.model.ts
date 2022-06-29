import { Field, ObjectType,  } from "type-graphql";

@ObjectType()
export class WeatherInfo {
    @Field()
    id!: number;

    @Field()
    main!: string;

    @Field()
    description!: string;

    @Field()
    iconUrl!: string;

    @Field()
    temp!: number;

    @Field()
    feels_like!: number;

    @Field()
    temp_min!: number;

    @Field()
    temp_max!: number;

    @Field()
    pressure!: number;

    @Field()
    humidity!: number;

    @Field()
    sea_level!: number;

    @Field()
    grnd_level!: number;

    @Field()
    city!: string; 

}

@ObjectType()
export class WeatherCollection {
    @Field(() => WeatherInfo)
    weather!: WeatherInfo[];
}