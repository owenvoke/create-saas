#!/usr/bin/env node

import list from './list'

list.run().catch(error => console.error(error.message))
