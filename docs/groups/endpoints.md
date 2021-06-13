# Endpoints


## GET /api/healthcheck




> Example request:

```javascript
const url = new URL(
    "http://testapi.com/api/healthcheck"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X GET \
    -G "http://testapi.com/api/healthcheck" 

```


> Example response (200):

```json
{"status":"up","services":{"database":"up","redis":"up"}}
```
<div id="execution-results-GET-api-healthcheck" hidden>
    <blockquote>Received response<span id="execution-response-status-GET-api-healthcheck"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GET-api-healthcheck"></code></pre>
</div>
<div id="execution-error-GET-api-healthcheck" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GET-api-healthcheck"></code></pre>
</div>

<form id="form-GET-api-healthcheck" data-method="GET" data-path="/api/healthcheck" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('GET-api-healthcheck', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-tryout-GET-api-healthcheck" onclick="tryItOut('GET-api-healthcheck');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-canceltryout-GET-api-healthcheck" onclick="cancelTryOut('GET-api-healthcheck');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-executetryout-GET-api-healthcheck" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/api/healthcheck</b></code>
</p>
</form>

## POST /array-body




> Example request:

```javascript
const url = new URL(
    "http://testapi.com/array-body"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://testapi.com/array-body" 

```


<div id="execution-results-POST-array-body" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-array-body"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-array-body"></code></pre>
</div>
<div id="execution-error-POST-array-body" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-array-body"></code></pre>
</div>

<form id="form-POST-array-body" data-method="POST" data-path="/array-body" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-array-body', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-tryout-POST-array-body" onclick="tryItOut('POST-array-body');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-canceltryout-POST-array-body" onclick="cancelTryOut('POST-array-body');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-executetryout-POST-array-body" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/array-body</b></code>
</p>
</form>

## POST /file-input




> Example request:

```javascript
const url = new URL(
    "http://testapi.com/file-input"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));
```

```bash
curl -X POST \
    "http://testapi.com/file-input" 

```


<div id="execution-results-POST-file-input" hidden>
    <blockquote>Received response<span id="execution-response-status-POST-file-input"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POST-file-input"></code></pre>
</div>
<div id="execution-error-POST-file-input" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POST-file-input"></code></pre>
</div>

<form id="form-POST-file-input" data-method="POST" data-path="/file-input" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application/json","Accept":"application/json"}' onsubmit="event.preventDefault(); executeTryOut('POST-file-input', this);">
<h3>
    Request
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-tryout-POST-file-input" onclick="tryItOut('POST-file-input');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-canceltryout-POST-file-input" onclick="cancelTryOut('POST-file-input');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius 5px; border-width: thin;" id="btn-executetryout-POST-file-input" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/file-input</b></code>
</p>
</form>


