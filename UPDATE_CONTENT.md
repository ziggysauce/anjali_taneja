## Updating Events
* In source code, navigate to `src/api/Events.js`
* Update each event object accordingly:

```
{
  date: "[Insert date here]",
  location: "[Insert  location here]"
  details: "[Insert any details here]"
}
```

* Note that any field is optional and will only show if not empty ("")
* Also note that it's recommended to only show up to 4 events at a time (assumming the descriptions aren't very long) otherwise the stlying may get messed up.


## Updating Videos
* In the source code, navigate to `src/pages/Video.js`
* Update or add a video iframe to match below:

```
<iframe src="[insert youtube embedding URL here]"
  className="w-100 min-vh mb-5"
  title="[Insert YouTube title here]"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen>
</iframe>
```