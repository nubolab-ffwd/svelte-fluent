emails =
  { $unreadEmails ->
    [one] You have one unread email.
    *[other] You have { $unreadEmails } unread emails.
  }
