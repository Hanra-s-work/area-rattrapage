import mariadb from 'mariadb';

class DB {
    private pool: mariadb.Pool;

    constructor(host: string, user: string, password: string, database: string, port: number) {
        this.pool = mariadb.createPool({
            host,
            user,
            password,
            database,
            port,
            connectionLimit: 5
        });
    }

    private async getConnection(): Promise<mariadb.PoolConnection> {
        return await this.pool.getConnection();
    }

    public async writeToTable(tableName: string, columns: string[], data: any[]): Promise<void> {
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await this.getConnection();
            const query = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${data.map(() => '?').join(', ')})`;
            await conn.query(query, data);
        } catch (error) {
            console.error('Error writing to table:', error);
        } finally {
            if (conn) conn.release();
        }
    }

    public async describeTable(tableName: string): Promise<any> {
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await this.getConnection();
            return await conn.query(`DESCRIBE ${tableName}`);
        } catch (error) {
            console.error('Error describing table:', error);
            return null;
        } finally {
            if (conn) conn.release();
        }
    }

    public async getContentFromTable(tableName: string, columns: string[], whereClause?: string, values: any[] = []): Promise<any> {
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await this.getConnection();
            const query = `SELECT ${columns.join(', ')} FROM ${tableName} ${whereClause ? 'WHERE ' + whereClause : ''}`;
            return await conn.query(query, values);
        } catch (error) {
            console.error('Error getting content from table:', error);
            return null;
        } finally {
            if (conn) conn.release();
        }
    }

    public async dropFromTable(tableName: string, whereClause: string, values: any[]): Promise<void> {
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await this.getConnection();
            const query = `DELETE FROM ${tableName} WHERE ${whereClause}`;
            await conn.query(query, values);
        } catch (error) {
            console.error('Error deleting from table:', error);
        } finally {
            if (conn) conn.release();
        }
    }
    public async updateTable(tableName: string, columns: string[], data: any[], whereClause: string, whereValues: any[]): Promise<void> {
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await this.getConnection();

            const setClause = columns.map(column => `${column} = ?`).join(', ');

            const query = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;

            await conn.query(query, [...data, ...whereValues]);

        } catch (error) {
            console.error('Error updating table:', error);
        } finally {
            if (conn) conn.release();
        }
    }
}

export default DB;
