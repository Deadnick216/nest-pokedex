import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{
    
    @Prop({
        unique: true,
        index: true,
    })
    name:string;

    @Prop({
        unique: true,
        index: true,
    })
    no : number;
}

export const Pokemonschema = SchemaFactory.createForClass( Pokemon );