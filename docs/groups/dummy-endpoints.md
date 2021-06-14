# Dummy endpoints


## Body content array




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
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-array-body" onclick="tryItOut('POST-array-body');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-array-body" onclick="cancelTryOut('POST-array-body');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-array-body" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/array-body</b></code>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>

<p>
<details>
    <summary>
        <b><code></code></b>&nbsp;&nbsp;<small>object</small> 
            <i>optional</i>
        <br>
    </summary>
<br>

  <p>
  <b><code>[].row_id</code></b>&nbsp;&nbsp;<small>string</small> 
      <i>optional</i>
  <input type="text" name=".0.row_id" data-endpoint="POST-array-body" data-component="body" hidden>
  <br>
  A unique ID.  </p>
  <p>
  <b><code>[].name</code></b>&nbsp;&nbsp;<small>string</small> 
  <input type="text" name=".0.name" data-endpoint="POST-array-body" data-component="body" required hidden>
  <br>
  An element name.  </p>
  <p>
  <b><code>[].description</code></b>&nbsp;&nbsp;<small>string</small> 
      <i>optional</i>
  <input type="text" name=".0.description" data-endpoint="POST-array-body" data-component="body" hidden>
  <br>
  An optional description of the element.  </p>
</details>
</p>
</form>

## File input




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
    <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POST-file-input" onclick="tryItOut('POST-file-input');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POST-file-input" onclick="cancelTryOut('POST-file-input');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POST-file-input" hidden>Send Request 💥</button>
</h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>/file-input</b></code>
</p>
<h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>

<p>
<b><code>[]</code></b>&nbsp;&nbsp;<small>file[]</small> 
<input type="file" name=".0.0" data-endpoint="POST-file-input" data-component="body" required  hidden>
<input type="file" name=".0.1" data-endpoint="POST-file-input" data-component="body" hidden>
<br>
List of files.</p>
</form>


