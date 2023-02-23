import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// Import Document class from mongoose to provide
// additional behavior to the entity
@Schema()
export class Pokemon extends Document {
  // Additional property information using prop decorator
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
// Have to export a schema based on entity
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
