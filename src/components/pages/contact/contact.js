"use client"

import { useTranslations } from "@/useTranslations.js"
import { useEffect, useRef } from "react"

const localStorageKey = "contact-form"
const backendUrl = "/api/process-contact-request"
const receiverEmail = "jonas@sanjo-solutions.com"

export default function Contact() {
  const translations = useTranslations("contact")

  const formRef = useRef(null)

  useEffect(
    function () {
      const $form = formRef.current
      const $successMessage = document.getElementById("success-message")
      const $errorMessage = document.getElementById("error-message")
      const $mailToLink = document.getElementById("mail-to")
      const $submitButton = $form.querySelector("button[type=\"submit\"]")

      loadFormData()

      function showError() {
        const $subject = document.getElementById("subject")
        const $message = document.getElementById("message")
        $mailToLink.href = "mailto:" + receiverEmail +
          `?subject=${ encodeURIComponent($subject.value) }&body=${ encodeURIComponent(
            $message.value) }`
        $errorMessage.classList.remove("d-none")
        $successMessage.classList.add("d-none")
      }

      async function onSubmit(event) {
        event.preventDefault()

        $submitButton.disabled = true
        try {
          const response = await fetch(backendUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: serializeFormDataToJSON(),
          })

          if (response.status === 200) {
            $successMessage.classList.remove("d-none")
            $errorMessage.classList.add("d-none")
            clearForm()
          } else {
            showError()
          }
        } catch (error) {
          console.error(error)
          showError()
        } finally {
          $submitButton.disabled = false
        }
      }

      $form.addEventListener("submit", onSubmit)

      $form.addEventListener("keyup", saveFormData)
      $form.addEventListener("change", saveFormData)

      function saveFormData() {
        localStorage.setItem(localStorageKey, serializeFormDataToJSON())
      }

      function loadFormData() {
        const item = localStorage.getItem(localStorageKey)
        if (item) {
          try {
            const data = JSON.parse(item)
            for (const [key, value] of Object.entries(data)) {
              const $input = $form.querySelector(`[name="${ key }"]`)
              if ($input) {
                $input.value = value
              }
            }
          } catch (error) {
            console.error(error)
          }
        }
      }

      function clearForm() {
        $form.querySelector("#subject").value = ""
        $form.querySelector("#message").value = ""
        saveFormData()
      }

      function serializeFormDataToJSON() {
        const data = new FormData($form)
        return JSON.stringify(Object.fromEntries(data.entries()))
      }

      return () => {
        $form.removeEventListener("submit", onSubmit)
        $form.removeEventListener("keyup", saveFormData)
        $form.removeEventListener("change", saveFormData)
      }
    },
    [],
  )

  return (
    <>
      <h1 className="mt-3 mt-md-5">{ translations.title }</h1>

      <form ref={ formRef }>
        <div
          id="success-message"
          className="alert alert-success d-none"
          role="alert"
        >
          { translations.success }
        </div>

        <div
          id="error-message"
          className="alert alert-danger d-none"
          role="alert"
        >
          { translations.thereWasAnError }{ " " }
          { translations.pleaseContactUsViaEmail } (
          <a
            id="mail-to"
            href="mailto:jonas@sanjo-solutions.com"
            target="_blank"
          >
            jonas@sanjo-solutions.com
          </a>
          ).{ " " }
          { translations.sorryForTheInconvenience }
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            { translations.subject }</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            { translations.message }</label>
          <textarea
            rows="5"
            className="form-control"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                { translations.name }</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                { translations.email }</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            { translations.contact }</button>
        </div>
      </form>
    </>
  )
}
