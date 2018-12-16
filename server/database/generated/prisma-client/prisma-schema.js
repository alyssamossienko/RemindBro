module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCron {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateRecipient {
  count: Int!
}

type AggregateReminder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum ContactMethod {
  EMAIL
  SMS
}

type Cron {
  id: ID!
  plainText: String!
  cronText: String!
  reminder: Reminder!
}

type CronConnection {
  pageInfo: PageInfo!
  edges: [CronEdge]!
  aggregate: AggregateCron!
}

input CronCreateInput {
  plainText: String!
  cronText: String!
  reminder: ReminderCreateOneWithoutFrequencyInput!
}

input CronCreateOneWithoutReminderInput {
  create: CronCreateWithoutReminderInput
  connect: CronWhereUniqueInput
}

input CronCreateWithoutReminderInput {
  plainText: String!
  cronText: String!
}

type CronEdge {
  node: Cron!
  cursor: String!
}

enum CronOrderByInput {
  id_ASC
  id_DESC
  plainText_ASC
  plainText_DESC
  cronText_ASC
  cronText_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CronPreviousValues {
  id: ID!
  plainText: String!
  cronText: String!
}

type CronSubscriptionPayload {
  mutation: MutationType!
  node: Cron
  updatedFields: [String!]
  previousValues: CronPreviousValues
}

input CronSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CronWhereInput
  AND: [CronSubscriptionWhereInput!]
  OR: [CronSubscriptionWhereInput!]
  NOT: [CronSubscriptionWhereInput!]
}

input CronUpdateInput {
  plainText: String
  cronText: String
  reminder: ReminderUpdateOneRequiredWithoutFrequencyInput
}

input CronUpdateManyMutationInput {
  plainText: String
  cronText: String
}

input CronUpdateOneWithoutReminderInput {
  create: CronCreateWithoutReminderInput
  update: CronUpdateWithoutReminderDataInput
  upsert: CronUpsertWithoutReminderInput
  delete: Boolean
  disconnect: Boolean
  connect: CronWhereUniqueInput
}

input CronUpdateWithoutReminderDataInput {
  plainText: String
  cronText: String
}

input CronUpsertWithoutReminderInput {
  update: CronUpdateWithoutReminderDataInput!
  create: CronCreateWithoutReminderInput!
}

input CronWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  plainText: String
  plainText_not: String
  plainText_in: [String!]
  plainText_not_in: [String!]
  plainText_lt: String
  plainText_lte: String
  plainText_gt: String
  plainText_gte: String
  plainText_contains: String
  plainText_not_contains: String
  plainText_starts_with: String
  plainText_not_starts_with: String
  plainText_ends_with: String
  plainText_not_ends_with: String
  cronText: String
  cronText_not: String
  cronText_in: [String!]
  cronText_not_in: [String!]
  cronText_lt: String
  cronText_lte: String
  cronText_gt: String
  cronText_gte: String
  cronText_contains: String
  cronText_not_contains: String
  cronText_starts_with: String
  cronText_not_starts_with: String
  cronText_ends_with: String
  cronText_not_ends_with: String
  reminder: ReminderWhereInput
  AND: [CronWhereInput!]
  OR: [CronWhereInput!]
  NOT: [CronWhereInput!]
}

input CronWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCron(data: CronCreateInput!): Cron!
  updateCron(data: CronUpdateInput!, where: CronWhereUniqueInput!): Cron
  updateManyCrons(data: CronUpdateManyMutationInput!, where: CronWhereInput): BatchPayload!
  upsertCron(where: CronWhereUniqueInput!, create: CronCreateInput!, update: CronUpdateInput!): Cron!
  deleteCron(where: CronWhereUniqueInput!): Cron
  deleteManyCrons(where: CronWhereInput): BatchPayload!
  createNotification(data: NotificationCreateInput!): Notification!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  createRecipient(data: RecipientCreateInput!): Recipient!
  updateRecipient(data: RecipientUpdateInput!, where: RecipientWhereUniqueInput!): Recipient
  updateManyRecipients(data: RecipientUpdateManyMutationInput!, where: RecipientWhereInput): BatchPayload!
  upsertRecipient(where: RecipientWhereUniqueInput!, create: RecipientCreateInput!, update: RecipientUpdateInput!): Recipient!
  deleteRecipient(where: RecipientWhereUniqueInput!): Recipient
  deleteManyRecipients(where: RecipientWhereInput): BatchPayload!
  createReminder(data: ReminderCreateInput!): Reminder!
  updateReminder(data: ReminderUpdateInput!, where: ReminderWhereUniqueInput!): Reminder
  updateManyReminders(data: ReminderUpdateManyMutationInput!, where: ReminderWhereInput): BatchPayload!
  upsertReminder(where: ReminderWhereUniqueInput!, create: ReminderCreateInput!, update: ReminderUpdateInput!): Reminder!
  deleteReminder(where: ReminderWhereUniqueInput!): Reminder
  deleteManyReminders(where: ReminderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Notification {
  id: ID!
  parentReminder: Reminder!
  createdAt: DateTime!
  scheduledDelivery: DateTime!
  status: Status
}

type NotificationConnection {
  pageInfo: PageInfo!
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  parentReminder: ReminderCreateOneWithoutSentRemindersInput!
  scheduledDelivery: DateTime!
  status: Status
}

input NotificationCreateManyWithoutParentReminderInput {
  create: [NotificationCreateWithoutParentReminderInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutParentReminderInput {
  scheduledDelivery: DateTime!
  status: Status
}

type NotificationEdge {
  node: Notification!
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  scheduledDelivery_ASC
  scheduledDelivery_DESC
  status_ASC
  status_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  createdAt: DateTime!
  scheduledDelivery: DateTime!
  status: Status
}

input NotificationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  scheduledDelivery: DateTime
  scheduledDelivery_not: DateTime
  scheduledDelivery_in: [DateTime!]
  scheduledDelivery_not_in: [DateTime!]
  scheduledDelivery_lt: DateTime
  scheduledDelivery_lte: DateTime
  scheduledDelivery_gt: DateTime
  scheduledDelivery_gte: DateTime
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  AND: [NotificationScalarWhereInput!]
  OR: [NotificationScalarWhereInput!]
  NOT: [NotificationScalarWhereInput!]
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
  AND: [NotificationSubscriptionWhereInput!]
  OR: [NotificationSubscriptionWhereInput!]
  NOT: [NotificationSubscriptionWhereInput!]
}

input NotificationUpdateInput {
  parentReminder: ReminderUpdateOneRequiredWithoutSentRemindersInput
  scheduledDelivery: DateTime
  status: Status
}

input NotificationUpdateManyDataInput {
  scheduledDelivery: DateTime
  status: Status
}

input NotificationUpdateManyMutationInput {
  scheduledDelivery: DateTime
  status: Status
}

input NotificationUpdateManyWithoutParentReminderInput {
  create: [NotificationCreateWithoutParentReminderInput!]
  delete: [NotificationWhereUniqueInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutParentReminderInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutParentReminderInput!]
  deleteMany: [NotificationScalarWhereInput!]
  updateMany: [NotificationUpdateManyWithWhereNestedInput!]
}

input NotificationUpdateManyWithWhereNestedInput {
  where: NotificationScalarWhereInput!
  data: NotificationUpdateManyDataInput!
}

input NotificationUpdateWithoutParentReminderDataInput {
  scheduledDelivery: DateTime
  status: Status
}

input NotificationUpdateWithWhereUniqueWithoutParentReminderInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutParentReminderDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutParentReminderInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutParentReminderDataInput!
  create: NotificationCreateWithoutParentReminderInput!
}

input NotificationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  parentReminder: ReminderWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  scheduledDelivery: DateTime
  scheduledDelivery_not: DateTime
  scheduledDelivery_in: [DateTime!]
  scheduledDelivery_not_in: [DateTime!]
  scheduledDelivery_lt: DateTime
  scheduledDelivery_lte: DateTime
  scheduledDelivery_gt: DateTime
  scheduledDelivery_gte: DateTime
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  AND: [NotificationWhereInput!]
  OR: [NotificationWhereInput!]
  NOT: [NotificationWhereInput!]
}

input NotificationWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cron(where: CronWhereUniqueInput!): Cron
  crons(where: CronWhereInput, orderBy: CronOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cron]!
  cronsConnection(where: CronWhereInput, orderBy: CronOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CronConnection!
  notification(where: NotificationWhereUniqueInput!): Notification
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  recipient(where: RecipientWhereUniqueInput!): Recipient
  recipients(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipient]!
  recipientsConnection(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipientConnection!
  reminder(where: ReminderWhereUniqueInput!): Reminder
  reminders(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reminder]!
  remindersConnection(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReminderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Recipient {
  id: ID!
  name: String!
  reminders(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reminder!]
  contactMethod: ContactMethod
  contactInfo: String
  user: User!
}

type RecipientConnection {
  pageInfo: PageInfo!
  edges: [RecipientEdge]!
  aggregate: AggregateRecipient!
}

input RecipientCreateInput {
  name: String!
  reminders: ReminderCreateManyWithoutRecipientsInput
  contactMethod: ContactMethod
  contactInfo: String
  user: UserCreateOneWithoutRecipientInput!
}

input RecipientCreateManyWithoutRemindersInput {
  create: [RecipientCreateWithoutRemindersInput!]
  connect: [RecipientWhereUniqueInput!]
}

input RecipientCreateManyWithoutUserInput {
  create: [RecipientCreateWithoutUserInput!]
  connect: [RecipientWhereUniqueInput!]
}

input RecipientCreateWithoutRemindersInput {
  name: String!
  contactMethod: ContactMethod
  contactInfo: String
  user: UserCreateOneWithoutRecipientInput!
}

input RecipientCreateWithoutUserInput {
  name: String!
  reminders: ReminderCreateManyWithoutRecipientsInput
  contactMethod: ContactMethod
  contactInfo: String
}

type RecipientEdge {
  node: Recipient!
  cursor: String!
}

enum RecipientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  contactMethod_ASC
  contactMethod_DESC
  contactInfo_ASC
  contactInfo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RecipientPreviousValues {
  id: ID!
  name: String!
  contactMethod: ContactMethod
  contactInfo: String
}

input RecipientScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  contactMethod: ContactMethod
  contactMethod_not: ContactMethod
  contactMethod_in: [ContactMethod!]
  contactMethod_not_in: [ContactMethod!]
  contactInfo: String
  contactInfo_not: String
  contactInfo_in: [String!]
  contactInfo_not_in: [String!]
  contactInfo_lt: String
  contactInfo_lte: String
  contactInfo_gt: String
  contactInfo_gte: String
  contactInfo_contains: String
  contactInfo_not_contains: String
  contactInfo_starts_with: String
  contactInfo_not_starts_with: String
  contactInfo_ends_with: String
  contactInfo_not_ends_with: String
  AND: [RecipientScalarWhereInput!]
  OR: [RecipientScalarWhereInput!]
  NOT: [RecipientScalarWhereInput!]
}

type RecipientSubscriptionPayload {
  mutation: MutationType!
  node: Recipient
  updatedFields: [String!]
  previousValues: RecipientPreviousValues
}

input RecipientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipientWhereInput
  AND: [RecipientSubscriptionWhereInput!]
  OR: [RecipientSubscriptionWhereInput!]
  NOT: [RecipientSubscriptionWhereInput!]
}

input RecipientUpdateInput {
  name: String
  reminders: ReminderUpdateManyWithoutRecipientsInput
  contactMethod: ContactMethod
  contactInfo: String
  user: UserUpdateOneRequiredWithoutRecipientInput
}

input RecipientUpdateManyDataInput {
  name: String
  contactMethod: ContactMethod
  contactInfo: String
}

input RecipientUpdateManyMutationInput {
  name: String
  contactMethod: ContactMethod
  contactInfo: String
}

input RecipientUpdateManyWithoutRemindersInput {
  create: [RecipientCreateWithoutRemindersInput!]
  delete: [RecipientWhereUniqueInput!]
  connect: [RecipientWhereUniqueInput!]
  disconnect: [RecipientWhereUniqueInput!]
  update: [RecipientUpdateWithWhereUniqueWithoutRemindersInput!]
  upsert: [RecipientUpsertWithWhereUniqueWithoutRemindersInput!]
  deleteMany: [RecipientScalarWhereInput!]
  updateMany: [RecipientUpdateManyWithWhereNestedInput!]
}

input RecipientUpdateManyWithoutUserInput {
  create: [RecipientCreateWithoutUserInput!]
  delete: [RecipientWhereUniqueInput!]
  connect: [RecipientWhereUniqueInput!]
  disconnect: [RecipientWhereUniqueInput!]
  update: [RecipientUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [RecipientUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [RecipientScalarWhereInput!]
  updateMany: [RecipientUpdateManyWithWhereNestedInput!]
}

input RecipientUpdateManyWithWhereNestedInput {
  where: RecipientScalarWhereInput!
  data: RecipientUpdateManyDataInput!
}

input RecipientUpdateWithoutRemindersDataInput {
  name: String
  contactMethod: ContactMethod
  contactInfo: String
  user: UserUpdateOneRequiredWithoutRecipientInput
}

input RecipientUpdateWithoutUserDataInput {
  name: String
  reminders: ReminderUpdateManyWithoutRecipientsInput
  contactMethod: ContactMethod
  contactInfo: String
}

input RecipientUpdateWithWhereUniqueWithoutRemindersInput {
  where: RecipientWhereUniqueInput!
  data: RecipientUpdateWithoutRemindersDataInput!
}

input RecipientUpdateWithWhereUniqueWithoutUserInput {
  where: RecipientWhereUniqueInput!
  data: RecipientUpdateWithoutUserDataInput!
}

input RecipientUpsertWithWhereUniqueWithoutRemindersInput {
  where: RecipientWhereUniqueInput!
  update: RecipientUpdateWithoutRemindersDataInput!
  create: RecipientCreateWithoutRemindersInput!
}

input RecipientUpsertWithWhereUniqueWithoutUserInput {
  where: RecipientWhereUniqueInput!
  update: RecipientUpdateWithoutUserDataInput!
  create: RecipientCreateWithoutUserInput!
}

input RecipientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  reminders_every: ReminderWhereInput
  reminders_some: ReminderWhereInput
  reminders_none: ReminderWhereInput
  contactMethod: ContactMethod
  contactMethod_not: ContactMethod
  contactMethod_in: [ContactMethod!]
  contactMethod_not_in: [ContactMethod!]
  contactInfo: String
  contactInfo_not: String
  contactInfo_in: [String!]
  contactInfo_not_in: [String!]
  contactInfo_lt: String
  contactInfo_lte: String
  contactInfo_gt: String
  contactInfo_gte: String
  contactInfo_contains: String
  contactInfo_not_contains: String
  contactInfo_starts_with: String
  contactInfo_not_starts_with: String
  contactInfo_ends_with: String
  contactInfo_not_ends_with: String
  user: UserWhereInput
  AND: [RecipientWhereInput!]
  OR: [RecipientWhereInput!]
  NOT: [RecipientWhereInput!]
}

input RecipientWhereUniqueInput {
  id: ID
}

type Reminder {
  id: ID!
  title: String!
  message: String
  description: String
  recipients(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipient!]
  author: User!
  frequency: Cron
  sentReminders(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  createdAt: DateTime!
}

type ReminderConnection {
  pageInfo: PageInfo!
  edges: [ReminderEdge]!
  aggregate: AggregateReminder!
}

input ReminderCreateInput {
  title: String
  message: String
  description: String
  recipients: RecipientCreateManyWithoutRemindersInput
  author: UserCreateOneWithoutRemindersInput!
  frequency: CronCreateOneWithoutReminderInput
  sentReminders: NotificationCreateManyWithoutParentReminderInput
}

input ReminderCreateManyWithoutAuthorInput {
  create: [ReminderCreateWithoutAuthorInput!]
  connect: [ReminderWhereUniqueInput!]
}

input ReminderCreateManyWithoutRecipientsInput {
  create: [ReminderCreateWithoutRecipientsInput!]
  connect: [ReminderWhereUniqueInput!]
}

input ReminderCreateOneWithoutFrequencyInput {
  create: ReminderCreateWithoutFrequencyInput
  connect: ReminderWhereUniqueInput
}

input ReminderCreateOneWithoutSentRemindersInput {
  create: ReminderCreateWithoutSentRemindersInput
  connect: ReminderWhereUniqueInput
}

input ReminderCreateWithoutAuthorInput {
  title: String
  message: String
  description: String
  recipients: RecipientCreateManyWithoutRemindersInput
  frequency: CronCreateOneWithoutReminderInput
  sentReminders: NotificationCreateManyWithoutParentReminderInput
}

input ReminderCreateWithoutFrequencyInput {
  title: String
  message: String
  description: String
  recipients: RecipientCreateManyWithoutRemindersInput
  author: UserCreateOneWithoutRemindersInput!
  sentReminders: NotificationCreateManyWithoutParentReminderInput
}

input ReminderCreateWithoutRecipientsInput {
  title: String
  message: String
  description: String
  author: UserCreateOneWithoutRemindersInput!
  frequency: CronCreateOneWithoutReminderInput
  sentReminders: NotificationCreateManyWithoutParentReminderInput
}

input ReminderCreateWithoutSentRemindersInput {
  title: String
  message: String
  description: String
  recipients: RecipientCreateManyWithoutRemindersInput
  author: UserCreateOneWithoutRemindersInput!
  frequency: CronCreateOneWithoutReminderInput
}

type ReminderEdge {
  node: Reminder!
  cursor: String!
}

enum ReminderOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  message_ASC
  message_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReminderPreviousValues {
  id: ID!
  title: String!
  message: String
  description: String
  createdAt: DateTime!
}

input ReminderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReminderScalarWhereInput!]
  OR: [ReminderScalarWhereInput!]
  NOT: [ReminderScalarWhereInput!]
}

type ReminderSubscriptionPayload {
  mutation: MutationType!
  node: Reminder
  updatedFields: [String!]
  previousValues: ReminderPreviousValues
}

input ReminderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReminderWhereInput
  AND: [ReminderSubscriptionWhereInput!]
  OR: [ReminderSubscriptionWhereInput!]
  NOT: [ReminderSubscriptionWhereInput!]
}

input ReminderUpdateInput {
  title: String
  message: String
  description: String
  recipients: RecipientUpdateManyWithoutRemindersInput
  author: UserUpdateOneRequiredWithoutRemindersInput
  frequency: CronUpdateOneWithoutReminderInput
  sentReminders: NotificationUpdateManyWithoutParentReminderInput
}

input ReminderUpdateManyDataInput {
  title: String
  message: String
  description: String
}

input ReminderUpdateManyMutationInput {
  title: String
  message: String
  description: String
}

input ReminderUpdateManyWithoutAuthorInput {
  create: [ReminderCreateWithoutAuthorInput!]
  delete: [ReminderWhereUniqueInput!]
  connect: [ReminderWhereUniqueInput!]
  disconnect: [ReminderWhereUniqueInput!]
  update: [ReminderUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ReminderUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ReminderScalarWhereInput!]
  updateMany: [ReminderUpdateManyWithWhereNestedInput!]
}

input ReminderUpdateManyWithoutRecipientsInput {
  create: [ReminderCreateWithoutRecipientsInput!]
  delete: [ReminderWhereUniqueInput!]
  connect: [ReminderWhereUniqueInput!]
  disconnect: [ReminderWhereUniqueInput!]
  update: [ReminderUpdateWithWhereUniqueWithoutRecipientsInput!]
  upsert: [ReminderUpsertWithWhereUniqueWithoutRecipientsInput!]
  deleteMany: [ReminderScalarWhereInput!]
  updateMany: [ReminderUpdateManyWithWhereNestedInput!]
}

input ReminderUpdateManyWithWhereNestedInput {
  where: ReminderScalarWhereInput!
  data: ReminderUpdateManyDataInput!
}

input ReminderUpdateOneRequiredWithoutFrequencyInput {
  create: ReminderCreateWithoutFrequencyInput
  update: ReminderUpdateWithoutFrequencyDataInput
  upsert: ReminderUpsertWithoutFrequencyInput
  connect: ReminderWhereUniqueInput
}

input ReminderUpdateOneRequiredWithoutSentRemindersInput {
  create: ReminderCreateWithoutSentRemindersInput
  update: ReminderUpdateWithoutSentRemindersDataInput
  upsert: ReminderUpsertWithoutSentRemindersInput
  connect: ReminderWhereUniqueInput
}

input ReminderUpdateWithoutAuthorDataInput {
  title: String
  message: String
  description: String
  recipients: RecipientUpdateManyWithoutRemindersInput
  frequency: CronUpdateOneWithoutReminderInput
  sentReminders: NotificationUpdateManyWithoutParentReminderInput
}

input ReminderUpdateWithoutFrequencyDataInput {
  title: String
  message: String
  description: String
  recipients: RecipientUpdateManyWithoutRemindersInput
  author: UserUpdateOneRequiredWithoutRemindersInput
  sentReminders: NotificationUpdateManyWithoutParentReminderInput
}

input ReminderUpdateWithoutRecipientsDataInput {
  title: String
  message: String
  description: String
  author: UserUpdateOneRequiredWithoutRemindersInput
  frequency: CronUpdateOneWithoutReminderInput
  sentReminders: NotificationUpdateManyWithoutParentReminderInput
}

input ReminderUpdateWithoutSentRemindersDataInput {
  title: String
  message: String
  description: String
  recipients: RecipientUpdateManyWithoutRemindersInput
  author: UserUpdateOneRequiredWithoutRemindersInput
  frequency: CronUpdateOneWithoutReminderInput
}

input ReminderUpdateWithWhereUniqueWithoutAuthorInput {
  where: ReminderWhereUniqueInput!
  data: ReminderUpdateWithoutAuthorDataInput!
}

input ReminderUpdateWithWhereUniqueWithoutRecipientsInput {
  where: ReminderWhereUniqueInput!
  data: ReminderUpdateWithoutRecipientsDataInput!
}

input ReminderUpsertWithoutFrequencyInput {
  update: ReminderUpdateWithoutFrequencyDataInput!
  create: ReminderCreateWithoutFrequencyInput!
}

input ReminderUpsertWithoutSentRemindersInput {
  update: ReminderUpdateWithoutSentRemindersDataInput!
  create: ReminderCreateWithoutSentRemindersInput!
}

input ReminderUpsertWithWhereUniqueWithoutAuthorInput {
  where: ReminderWhereUniqueInput!
  update: ReminderUpdateWithoutAuthorDataInput!
  create: ReminderCreateWithoutAuthorInput!
}

input ReminderUpsertWithWhereUniqueWithoutRecipientsInput {
  where: ReminderWhereUniqueInput!
  update: ReminderUpdateWithoutRecipientsDataInput!
  create: ReminderCreateWithoutRecipientsInput!
}

input ReminderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  recipients_every: RecipientWhereInput
  recipients_some: RecipientWhereInput
  recipients_none: RecipientWhereInput
  author: UserWhereInput
  frequency: CronWhereInput
  sentReminders_every: NotificationWhereInput
  sentReminders_some: NotificationWhereInput
  sentReminders_none: NotificationWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReminderWhereInput!]
  OR: [ReminderWhereInput!]
  NOT: [ReminderWhereInput!]
}

input ReminderWhereUniqueInput {
  id: ID
}

enum Status {
  SCHEDULED
  PENDING
  SUCCESS
  FAILLURE
}

type Subscription {
  cron(where: CronSubscriptionWhereInput): CronSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  recipient(where: RecipientSubscriptionWhereInput): RecipientSubscriptionPayload
  reminder(where: ReminderSubscriptionWhereInput): ReminderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  password: String!
  reminders(where: ReminderWhereInput, orderBy: ReminderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reminder!]
  recipient(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipient!]
  type: Int
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  password: String!
  reminders: ReminderCreateManyWithoutAuthorInput
  recipient: RecipientCreateManyWithoutUserInput
  type: Int
}

input UserCreateOneWithoutRecipientInput {
  create: UserCreateWithoutRecipientInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRemindersInput {
  create: UserCreateWithoutRemindersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRecipientInput {
  email: String
  name: String!
  password: String!
  reminders: ReminderCreateManyWithoutAuthorInput
  type: Int
}

input UserCreateWithoutRemindersInput {
  email: String
  name: String!
  password: String!
  recipient: RecipientCreateManyWithoutUserInput
  type: Int
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
  password: String!
  type: Int
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  reminders: ReminderUpdateManyWithoutAuthorInput
  recipient: RecipientUpdateManyWithoutUserInput
  type: Int
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
  type: Int
}

input UserUpdateOneRequiredWithoutRecipientInput {
  create: UserCreateWithoutRecipientInput
  update: UserUpdateWithoutRecipientDataInput
  upsert: UserUpsertWithoutRecipientInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRemindersInput {
  create: UserCreateWithoutRemindersInput
  update: UserUpdateWithoutRemindersDataInput
  upsert: UserUpsertWithoutRemindersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRecipientDataInput {
  email: String
  name: String
  password: String
  reminders: ReminderUpdateManyWithoutAuthorInput
  type: Int
}

input UserUpdateWithoutRemindersDataInput {
  email: String
  name: String
  password: String
  recipient: RecipientUpdateManyWithoutUserInput
  type: Int
}

input UserUpsertWithoutRecipientInput {
  update: UserUpdateWithoutRecipientDataInput!
  create: UserCreateWithoutRecipientInput!
}

input UserUpsertWithoutRemindersInput {
  update: UserUpdateWithoutRemindersDataInput!
  create: UserCreateWithoutRemindersInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  reminders_every: ReminderWhereInput
  reminders_some: ReminderWhereInput
  reminders_none: ReminderWhereInput
  recipient_every: RecipientWhereInput
  recipient_some: RecipientWhereInput
  recipient_none: RecipientWhereInput
  type: Int
  type_not: Int
  type_in: [Int!]
  type_not_in: [Int!]
  type_lt: Int
  type_lte: Int
  type_gt: Int
  type_gte: Int
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    