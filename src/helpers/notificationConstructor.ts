export default function notificationConstructor(status: number, description: string): any {
    return {
        status, description
    }
}