# frozen_string_literal: true

# Typed models for the FreeGames SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Giveaway entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] gamerpower_url
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] instructions
#   @return [String, nil]
#
# @!attribute [rw] open_giveaway
#   @return [String, nil]
#
# @!attribute [rw] open_giveaway_url
#   @return [String, nil]
#
# @!attribute [rw] platforms
#   @return [String, nil]
#
# @!attribute [rw] published_date
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] users
#   @return [Integer, nil]
#
# @!attribute [rw] worth
#   @return [String, nil]
Giveaway = Struct.new(
  :description,
  :end_date,
  :gamerpower_url,
  :id,
  :image,
  :instructions,
  :open_giveaway,
  :open_giveaway_url,
  :platforms,
  :published_date,
  :status,
  :thumbnail,
  :title,
  :type,
  :users,
  :worth,
  keyword_init: true
)

# Request payload for Giveaway#load.
#
# @!attribute [rw] id
#   @return [Integer]
GiveawayLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Giveaway#list.
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GiveawayListMatch = Struct.new(
  :platform,
  :sort_by,
  :type,
  keyword_init: true
)

# Worth entity data model.
#
# @!attribute [rw] active_giveaways_number
#   @return [Integer, nil]
#
# @!attribute [rw] worth_estimation_usd
#   @return [String, nil]
Worth = Struct.new(
  :active_giveaways_number,
  :worth_estimation_usd,
  keyword_init: true
)

# Request payload for Worth#load.
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
WorthLoadMatch = Struct.new(
  :platform,
  :type,
  keyword_init: true
)

