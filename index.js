var snapshot = IOTA.latestSnapshot;
var iri = com.iota.iri;
var Callable = iri.service.CallableRequest;
var Response = iri.service.dto.IXIResponse;

function getSnapshot(request) {
    return Response.create({
        index: snapshot.index(),
        state: snapshot.getState()
    });
}

API.put("getState", new Callable({ call: getSnapshot }))