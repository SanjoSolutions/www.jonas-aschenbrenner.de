// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses"

const ses = new SESClient()

export async function POST(request) {
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

  return Response.json({})
}
