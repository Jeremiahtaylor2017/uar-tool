import { relations } from "drizzle-orm";
import { mysqlTable, serial, datetime, text, int } from "drizzle-orm/mysql-core";

export const controls = mysqlTable('controls', {
    id: serial('id').primaryKey(),
    name: text('name'),
    dateUploaded: datetime('date_uploaded')
})

export const controlsRelations = relations(controls, ({ many }) => ({
    appUsers: many(appUsers)
}))

export const appUsers = mysqlTable('app_users', {
    id: serial('id').primaryKey(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    controlsId: int('controls_id')
})

export const appUsersRelations = relations(appUsers, ({ one }) => ({
    controls: one(controls, {
        fields: [appUsers.controlsId],
        references: [controls.id]
    })
}))