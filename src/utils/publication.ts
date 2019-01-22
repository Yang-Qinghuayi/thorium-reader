// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { PublicationView } from "readium-desktop/common/views/publication";

export function lcpReadable(publication: PublicationView): boolean {
    return (!publication.lcp ||
        (publication.lcp && !publication.lcp.rights.end) ||
        (publication.lcp && publication.lcp.rights.end && new Date(publication.lcp.rights.end).getTime() > Date.now()));
}
