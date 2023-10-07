// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses"

const ses = new SESClient()

export default async function handler(request, response) {
  if (request.method === "POST") {
    const body = await request.json()

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ["jonas@sanjo-solutions.com"],
      },
      Message: {
        Body: {
          Text: { Data: body.message },
        },

        Subject: { Data: body.subject },
      },
      Source: "jonas@sanjo-solutions.com",
      ReplyToAddresses: [
        body.email,
      ],
    })

    await ses.send(command)

    response.status(200).json({}).end()
  } else {
    response.status(405).end()
  }
}
