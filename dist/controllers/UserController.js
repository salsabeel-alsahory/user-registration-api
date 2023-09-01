import { getRepository } from 'typeorm';
import { User } from '../db/entities/User';
export const registerUser = async (req, res) => {
    const userRepository = getRepository(User);
    const { username, password } = req.body;
    const newUser = userRepository.create({ username, password });
    await userRepository.save(newUser);
    return res.status(201).json({ message: 'User registered successfully' });
};
