import { Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    create(createPokemonDto: CreatePokemonDto): Promise<Pokemon & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePokemonDto: UpdatePokemonDto): string;
    remove(id: number): string;
}
