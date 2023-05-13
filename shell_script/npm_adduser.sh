/usr/bin/expect <<EOD
spawn npm adduser
expect {
  "Username:" {send "amazing-types\r"; exp_continue}
  "Password:" {send "amazing-types\r"; exp_continue}
  "Email: (this IS public)" {send "amazing-types@example.com\r"; exp_continue}
}
EOD