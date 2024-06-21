import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    signin(dto: AuthDto): Promise<{
        message: string;
        error: boolean;
        user?: undefined;
    } | {
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
    }>;
}
