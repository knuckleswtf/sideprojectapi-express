# General


## Healthcheck


Check that the service is up. If everything is okay, you'll get a 200 OK response.
Otherwise, the request will fail with a 400 error, and a response listing the failed services.

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


> Example response (400, Service is unhealthy):

```json
{
    "status": "down",
    "services": {
        "database": "up",
        "redis": "down"
    }
}
```
> Example response (200):

```json
{
    "status": "up",
    "services": {
        "database": "up",
        "redis": "up"
    }
}
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
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GET-api-healthcheck" onclick="tryItOut('GET-api-healthcheck');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GET-api-healthcheck" onclick="cancelTryOut('GET-api-healthcheck');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GET-api-healthcheck" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>/api/healthcheck</b></code>
</p>
</form>

<h4 class="fancy-heading-panel"><b>Response Fields</b></h4>
<p>
<b><code>status</code></b>&nbsp;&nbsp; 
<input type="text" name="status" data-endpoint="" data-component="" required hidden>
<br>
The status of this API (`up` or `down`).</p>
<p>
<b><code>services</code></b>&nbsp;&nbsp; 
<input type="text" name="services" data-endpoint="" data-component="" required hidden>
<br>
Map of each downstream service and their status (`up` or `down`).</p>

