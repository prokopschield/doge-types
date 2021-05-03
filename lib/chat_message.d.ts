import { FormattedMessageChunk } from 'doge-utils';
import { UUID, DateStringExpression } from './primitive';
export interface ChatMessageConstructor {
    msg: {
        avatarUrl: string;
        displayName: string;
        id: UUID;
        isWhisper: boolean;
        sentAt: DateStringExpression;
        tokens: FormattedMessageChunk[];
        userId: UUID;
        username: string;
    };
    userId: UUID;
}
export interface ChatMessageData {
    avatarUrl: string;
    displayName: string;
    id: UUID;
    isWhisper: boolean;
    sentAt: Date;
    tokens: FormattedMessageChunk[];
    userId: UUID;
    username: string;
}
