const config = require('config');
const sanitizeInputs = require('./sanitize-search-params');
const CDXSearchApiRequest = require('./apis/cdx-api')
const cdxFilter = require('./filter-cdx')
const suggestionRequest = require('./apis/suggestion-api')

module.exports = function (req, res) {
    const requestData = sanitizeInputs(req, res);
    const viewModeDefault = 'list'

    let viewMode = requestData.get('viewMode') ?? viewModeDefault;

    if (!(['table', 'list'].includes(viewMode))) {
        viewMode = viewModeDefault;
    }
    if (viewMode != viewModeDefault) {
        requestData.set('viewMode', viewModeDefault);
    }
    const apiRequest = new CDXSearchApiRequest();

    suggestionRequest(requestData.get('q'), requestData.get('l') ?? 'pt',
        (suggestion) => {
            apiRequest.get(requestData,
                (apiData) => {
                    res.render('partials/url-' + viewMode + '-results', {
                        requestData: requestData,
                        apiData: cdxFilter(apiData),
                        suggestion: suggestion,
                    });
                });
        });
}

