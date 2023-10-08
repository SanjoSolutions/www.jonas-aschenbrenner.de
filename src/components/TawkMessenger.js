"use client"

import TawkMessengerBase from "@tawk.to/tawk-messenger-react"
import { useCallback, useRef } from "react"

export function TawkMessenger({ propertyId, widgetId }) {
  const tawkMessengerRef = useRef(null)

  const onLoad = useCallback(
    function onLoad() {
      const container = document.querySelector("div[class^=\"widget-\"]")
      const iframes = new Set()

      function modify() {
        try {
          const chatWindowIframe = document.querySelectorAll("iframe")[1]

          function focusInput() {
            try {
              const input = chatWindowIframe.contentDocument.querySelectorAll(
                ".tawk-chatinput-wrap textarea")[1]
              input.focus()
            } catch (error) {}
          }

          const chatButtonIframe = document.querySelector("iframe")
          chatButtonIframe.contentWindow.document.body.addEventListener(
            "click",
            () => {
              focusInput()
            },
          )

          chatWindowIframe.contentWindow.document.body.addEventListener(
            "click",
            (event) => {
              if (event.target.matches(".card--chat button")) {
                focusInput()
              }
            },
          )
        } catch (error) {

        }
      }

      const mutationObserver = new MutationObserver((mutations) => {
        const addedMutations = mutations.filter((mutation) => mutation.addedNodes.length >=
          1)
        addedMutations.forEach((mutation) => {
          iframes.add(mutation.addedNodes[0])
        })
        if (iframes.size === 3) {
          mutationObserver.disconnect()
          modify()
        }
      })
      mutationObserver.observe(
        container,
        {
          childList: true,
        },
      )
    },
    [],
  )

  return <TawkMessengerBase
    ref={ tawkMessengerRef }
    propertyId={ propertyId }
    widgetId={ widgetId }
    onLoad={ onLoad }
  />
}
