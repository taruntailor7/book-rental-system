import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<{
        message: string;
        error: boolean;
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            hash: string;
            firstName: string;
            lastName: string;
        };
    } | {
        message: string;
        error: boolean;
        user?: undefined;
    }>;
    signin(): {
        msg: string;
    };
}
